import React, { useState, useEffect } from "react";
import BusinessUserForm from "./Form";
import { getList, createItemCategory, updateItemCategory } from "./http";
import BusinessUserTable from "./Table";
import ModalComponent from "../../../../common/composite-component/modal";
import Loading from "../../../../common/composite-component/loading";
import { initialValues, itemCategoryViewUpdatePayloadData } from './util';
import { useSelector } from "react-redux";

function BusinessUser() {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isloading, setLoading] = useState(false);
  // const [changeData, setChangeData] = useState({})

  const userCurrentInfo = useSelector(state => state.currentInfo)

  useEffect(() => {
    populateTable();
  }, [userCurrentInfo]);

  const populateTable = () => {
    getList(userCurrentInfo, pageNo, pageSize, setTableData, setLoading);
  };

  const createToTable = () => {
    setFormData(initialValues);
    setIsDisabled(false);
    setModalOpen(true);
  };

  const updateToTable = (row) => {
    const data=itemCategoryViewUpdatePayloadData(row);
    setFormData(data);
    setIsDisabled(false);
    setModalOpen(true);
  };

  const viewData = (row) => {
    const data=itemCategoryViewUpdatePayloadData(row)
    setFormData(data);
    setIsDisabled(true);
    setModalOpen(true);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  function onClickClose() {
    setModalOpen(false);
  }

  function submitBtnClick(values, formik) {
    // console.log(values)
    // if (formData?.itemType) {
    //   return updateItemCategory(
    //     values,
    //     userCurrentInfo,
    //     formik,
    //     populateTable,
    //     formData,
    //     setFormData,
    //     onClickClose,
    //     setLoading,
    //     // changeData,
    //   );
    // }
    createItemCategory(values, userCurrentInfo, formik, populateTable, onClickClose, setLoading);
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
        <BusinessUserForm
          formData={formData}
          isDisabled={isDisabled}
          submitBtnClick={submitBtnClick}
          userCurrentInfo={userCurrentInfo}
          setLoading={setLoading}
        />
      </ModalComponent>
      <BusinessUserTable
        data={tableData}
        updateToTable={updateToTable}
        viewData={viewData}
        createEvent={createToTable}
      />
    </>
  );
}

export default BusinessUser;
