/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import SupplierForm from "./Form";
import SupplierTable from "./Table";
import { createSupplier, getList, updateSupplier } from "./http";
import { initialValues } from "./util";
import ModalComponent from "../../../common/composite-component/modal";
import Loading from "../../../common/composite-component/loading";

const Supplier = () => {
  const accId = 1;
  const searchTerm = "";
  const businessUnitId = 1;
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
    setIsDisabled(false);
    setUpdateFormData(row);
    setModalOpen(true);
  };
  const viewData = (row) => {
    setUpdateFormData(row);
    setIsDisabled(true);
    setModalOpen(true);
  };

  const submitBtnClick = (values, formik) => {
    if (updateFormData?.supplierId) {
      return updateSupplier(
        values,
        formik,
        populateTable,
        setUpdateFormData,
        setLoading,
        closeModal
      );
    }
    return createSupplier(
      values,
      formik,
      populateTable,
      setLoading,
      closeModal
    );
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className='d-flex justify-content-between'>
        <h3>Supplier</h3>
      </div>

      <ModalComponent
        modalSate={isModalOpen}
        modalClose={closeModal}
        fixed={true}
        size='lg'
        title='Supplier'
      >
        <SupplierForm
          updateFormData={updateFormData}
          isDisabled={isDisabled}
          submitBtnClick={submitBtnClick}
          setLoading={setLoading}
        />
      </ModalComponent>
      <SupplierTable
        data={tableData}
        updateToTable={updateToTable}
        viewData={viewData}
        createEvent={createToTable}
      />
    </>
  );
};

export default Supplier;
