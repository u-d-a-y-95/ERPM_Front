import React, { useState, useEffect } from "react";
import ItemSubCategoryForm from "./Form";
import { createItemSubCategory, getList, updateItemSubCategory } from "./http";
import ItemSubCategoryTable from "./Table";
import ModalComponent from "../../../../common/composite-component/modal";
import Loading from "../../../../common/composite-component/loading";
import { initialValues, itemSubCategoryViewUpdatePayloadData } from "./util";
import { useSelector } from "react-redux";

function ItemSubCategory() {
  const [tableData, setTableData] = useState([]);
  const [updateFormData, setUpdateFormData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const userCurrentInfo = useSelector((state) => state.currentInfo);

  const populateTable = () => {
    getList(pageNo, pageSize, setTableData, setLoading, userCurrentInfo);
  };
  useEffect(() => {
    populateTable();
  }, [userCurrentInfo]);

  const createToTable = () => {
    setUpdateFormData(initialValues);
    setIsDisabled(false);
    setModalOpen(true);
  };

  const updateToTable = (row) => {
    const data = itemSubCategoryViewUpdatePayloadData(row);
    setUpdateFormData(data);
    setIsDisabled(false);
    setModalOpen(true);
  };

  const viewData = (row) => {
    const data = itemSubCategoryViewUpdatePayloadData(row);
    setUpdateFormData(data);
    setIsDisabled(true);
    setModalOpen(true);
  };

  function closeModal() {
    setModalOpen(false);
  }
  function submitBtnClick(values, formik) {
    if (updateFormData?.itemSubCategoryId) {
      return updateItemSubCategory(
        values,
        formik,
        populateTable,
        closeModal,
        setUpdateFormData,
        setLoading,
        userCurrentInfo
      );
    }
    return createItemSubCategory(
      values,
      userCurrentInfo,
      formik,
      populateTable,
      closeModal,
      setLoading
    );
  }

  return (
    <>
      {isLoading && <Loading />}
      <div className='d-flex justify-content-between'>
        <h3 className=''>Item Sub Category</h3>
      </div>
      <ModalComponent
        modalSate={isModalOpen}
        modalClose={closeModal}
        fixed={true}
        size='lg'
        title='Item Sub Category'
      >
        <ItemSubCategoryForm
          updateFormData={updateFormData}
          isDisabled={isDisabled}
          submitBtnClick={submitBtnClick}
          setLoading={setLoading}
          userCurrentInfo={userCurrentInfo}
        />
      </ModalComponent>
      <ItemSubCategoryTable
        data={tableData}
        updateToTable={updateToTable}
        viewData={viewData}
        createEvent={createToTable}
      />
    </>
  );
}

export default ItemSubCategory;
