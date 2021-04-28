import React, { useState, useEffect } from "react";
import ItemProfileForm from "./Form";
import { createItemProfile, getList, updateItemProfile } from "./http";
import ItemProfileTable from "./Table";
import ModalComponent from "../../../../common/composite-component/modal";
import Loading from "../../../../common/composite-component/loading";
import { initialValues, itemProfileViewUpdatePayloadData } from './util';
import { useSelector } from 'react-redux';

function ItemProfile() {
  const searchTerm = "";
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isloading, setLoading] = useState(false);

  const userCurrentInfo = useSelector(state => state.currentInfo)

  useEffect(() => {
    populateTable();
  }, []);
  const populateTable = () => {
    getList(userCurrentInfo, pageNo, pageSize, setTableData, setLoading, searchTerm);
  };

  const createToTable = () => {
    setFormData(initialValues);
    setIsDisabled(false);
    setModalOpen(true);
  };

  const updateToTable = (row) => {
    const data = itemProfileViewUpdatePayloadData(row)
    setFormData(data);
    setIsDisabled(false);
    setModalOpen(true);
  };

  const viewData = (row) => {
    const data = itemProfileViewUpdatePayloadData(row)
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
    if (formData?.itemId) {
      return updateItemProfile(
        values,
        userCurrentInfo,
        formik,
        populateTable,
        formData,
        setFormData,
        onClickClose,
        setLoading
      );
    }
    createItemProfile(values, userCurrentInfo, formik, populateTable, onClickClose, setLoading);
  }

  return (
    <>
      {isloading && <Loading />}
      <div className="d-flex justify-content-between">
        <h3 className="">Item Profile</h3>
      </div>
      <ModalComponent
        modalSate={isModalOpen}
        modalClose={onClickClose}
        fixed={true}
        size="lg"
        title="Item Basic Information"
      >
        <ItemProfileForm
          formData={formData}
          isDisabled={isDisabled}
          submitBtnClick={submitBtnClick}
          userCurrentInfo={userCurrentInfo}
        />
      </ModalComponent>

      <ItemProfileTable
        data={tableData}
        updateToTable={updateToTable}
        viewData={viewData}
        createEvent={createToTable}
      />
    </>
  );
}

export default ItemProfile;
