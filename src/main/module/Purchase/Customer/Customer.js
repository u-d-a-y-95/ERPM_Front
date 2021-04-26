/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import CustomerForm from "./Form";
import CustomerTable from "./Table";
import { createCustomer, getList, updateCustomer } from "./http";
import { initialValues } from "./util";
import Loading from "../../../common/composite-component/loading";
import ModalComponent from "../../../common/composite-component/modal";

const Customer = () => {
  const accId = 1;
  const businessUnitId = 1;
  const searchTerm = "";

  const [tableData, setTableData] = useState([]);
  const [updateFormData, setUpdateFormData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    populateTable();
  }, []);

  const populateTable = () => {
    getList(
      accId,
      pageNo,
      pageSize,
      setTableData,
      businessUnitId,
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
    setUpdateFormData(row);
    setIsDisabled(false);
    setModalOpen(true);
  };

  const viewData = (row) => {
    setUpdateFormData(row);
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
        closeModal
      );
    }
    return createCustomer(
      values,
      formik,
      populateTable,
      setLoading,
      closeModal
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
