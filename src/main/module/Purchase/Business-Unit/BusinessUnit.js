/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import BusinessUnitForm from "./Form";
import BusinessUnitTable from "./Table";
import { getList, createBusinessUnit, updateBusinessUnit } from "./http";
import ModalComponent from "../../../common/composite-component/modal";
import Loading from "../../../common/composite-component/loading";
import { initialValues } from "./util";
const BusinessUnit = (props) => {
  const accId = 1;
  const searchTerm = "";
  const [tableData, setTableData] = useState([]);
  const [updateFormData, setUpdateFormData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isloading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    populateTable();
  }, []);
  const populateTable = () => {
    getList(accId, pageNo, pageSize, setTableData, searchTerm, setLoading);
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

  const onClickClose = () => {
    setModalOpen(false);
    // business
    // mail .....
  };
  const submitBtnClick = (values, formik) => {
    if (updateFormData?.businessUnitId) {
      return updateBusinessUnit(
        values,
        formik,
        populateTable,
        updateFormData,
        setUpdateFormData,
        onClickClose,
        setLoading
      );
    }
    createBusinessUnit(values, formik, populateTable, onClickClose, setLoading);
  };
  return (
    <>
      {isLoading && <Loading />}
      <div className='d-flex justify-content-between'>
        <h3>Business Unit</h3>
      </div>

      <ModalComponent
        modalSate={isModalOpen}
        modalClose={onClickClose}
        fixed={true}
        size='lg'
        title='Busines Unit'
      >
        <BusinessUnitForm
          updateFormData={updateFormData}
          isDisabled={isDisabled}
          submitBtnClick={submitBtnClick}
        />
      </ModalComponent>
      <BusinessUnitTable
        data={tableData}
        updateToTable={updateToTable}
        viewData={viewData}
        createEvent={createToTable}
      />
    </>
  );
};

export default BusinessUnit;
