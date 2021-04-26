import React, { useState, useEffect } from "react";
import ItemCategoryForm from "./Form";
import { getList, createItemCategory } from "./http";
import ItemCategoryTable from "./Table";
import ModalComponent from "../../../../common/composite-component/modal";
import Loading from "../../../../common/composite-component/loading";
import { initialValues } from './util';

function ItemCategory() {
  const accountId = 1;
  const businessUnitId = 1;
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    populateTable();
  }, []);
  const populateTable = () => {
    getList(accountId, businessUnitId, pageNo, pageSize, setTableData, setLoading);
  };

  const createToTable = () => {
    setFormData(initialValues);
    setIsDisabled(false);
    setModalOpen(true);
  };

  const updateToTable = (row) => {
    setFormData(row);
    setIsDisabled(false);
    setModalOpen(true);
  };

  const viewData = (row) => {
    setFormData(row);
    setIsDisabled(true);
    setModalOpen(true);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  function onClickClose() {
    setModalOpen(false);
    // business
    // mail .....
  }

  function submitBtnClick(values, formik) {
    // if (formData?.itemCode) {
    //   return updateItemProfile(
    //     values,
    //     formik,
    //     populateTable,
    //     formData,
    //     setFormData,
    //     onClickClose,
    //     setLoading
    //   );
    // }
    createItemCategory(values, formik, populateTable, onClickClose, setLoading);
  }
  return (
    <>
      {isloading && <Loading />}
      <div className="d-flex justify-content-between">
        <h3 className="">Item Category</h3>
      </div>
      <ModalComponent
        modalSate={isModalOpen}
        modalClose={onClickClose}
        fixed={true}
        size="lg"
        title="New Item Category"
      >
        <ItemCategoryForm
          formData={formData}
          isDisabled={isDisabled}
          submitBtnClick={submitBtnClick}
          accountId={accountId}
          businessUnitId={businessUnitId}
        />
      </ModalComponent>
      <ItemCategoryTable
        data={tableData}
        updateToTable={updateToTable}
        viewData={viewData}
        createEvent={createToTable}
      />
    </>
  );
}

export default ItemCategory;
