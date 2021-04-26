/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import WarehouseForm from "./Form";
import WarehouseTable from "./Table";
import { createWarehouse, getList, updateWarehouse } from "./http";
import { initialValues } from "./util";
import Loading from "../../../common/composite-component/loading";
import ModalComponent from "../../../common/composite-component/modal";

const Warehouse = () => {
  const [tableData, setTableData] = useState([]);
  const [updateFormData, setUpdateFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    populateTable();
  }, []);

  const populateTable = () => {
    getList(setTableData, setLoading);
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
    if (updateFormData?.intId) {
      return updateWarehouse(
        values,
        formik,
        populateTable,
        setUpdateFormData,
        setLoading,
        closeModal
      );
    }
    return createWarehouse(
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
        <h1>Warehouse</h1>
      </div>

      <ModalComponent
        modalSate={isModalOpen}
        modalClose={closeModal}
        fixed={true}
        size='lg'
        title='Warehouse'
      >
        <WarehouseForm
          updateFormData={updateFormData}
          isDisabled={isDisabled}
          submitBtnClick={submitBtnClick}
          setLoading={setLoading}
        />
      </ModalComponent>

      <WarehouseTable
        data={tableData}
        updateToTable={updateToTable}
        viewData={viewData}
        createEvent={createToTable}
      />
    </>
  );
};

export default Warehouse;
