/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import CustomerForm from "./Form";
import CustomerTable from "./Table";
import { createCustomer, getList, updateCustomer } from "./http";
import { customerViewUpdatePayloadData, initialValues } from "./util";
import Loading from "../../../../common/composite-component/loading";
import ModalComponent from "../../../../common/composite-component/modal";
import { useSelector } from "react-redux";

const Customer = () => {
  const searchTerm = "";
  const userCurrentInfo = useSelector((state) => state.currentInfo);

  const [tableData, setTableData] = useState([]);
  const [updateFormData, setUpdateFormData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    populateTable();
  }, [userCurrentInfo]);

  const populateTable = () => {
    getList(
      userCurrentInfo,
      pageNo,
      pageSize,
      setTableData,
      searchTerm,
      setLoading
    );
  };

  const createToTable = () => {
    setUpdateFormData(initialValues);
    setIsDisabled(false);
    setModalOpen(true);
  };

  const updateToTable = (row) => {
    const data = customerViewUpdatePayloadData(row);
    setUpdateFormData(data);
    setIsDisabled(false);
    setModalOpen(true);
  };

  const viewData = (row) => {
    const data = customerViewUpdatePayloadData(row);
    setUpdateFormData(data);
    setIsDisabled(true);
    setModalOpen(true);
  };

  //submit button click;
  const submitBtnClick = (values, formik) => {
    if (updateFormData?.customerId) {
      return updateCustomer(
        values,
        formik,
        populateTable,
        setUpdateFormData,
        setLoading,
        closeModal,
        userCurrentInfo
      );
    }
    return createCustomer(
      values,
      formik,
      populateTable,
      setLoading,
      closeModal,
      userCurrentInfo
    );
  };

  //close modal
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      {isLoading && <Loading />}
      <div className='d-flex justify-content-between'>
        <h1>Customer</h1>
      </div>

      <ModalComponent
        modalSate={isModalOpen}
        modalClose={closeModal}
        fixed={true}
        size='lg'
        title='Customer'
      >
        <CustomerForm
          updateFormData={updateFormData}
          isDisabled={isDisabled}
          submitBtnClick={submitBtnClick}
          setLoading={setLoading}
        />
      </ModalComponent>

      <CustomerTable
        data={tableData}
        updateToTable={updateToTable}
        viewData={viewData}
        createEvent={createToTable}
      />
    </>
  );
};

export default Customer;
