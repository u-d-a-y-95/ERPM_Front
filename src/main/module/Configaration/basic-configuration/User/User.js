import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "../../../../common/composite-component/loading";
import UserForm from "./Form";
import { createUser, getList } from "./http";
import ModalComponent from "../../../../common/composite-component/modal";
import UserTable from "./Table";
import { formsInitialValues } from "./util";

function User() {
  const [tableData, setTableData] = useState([]);
  const [updateFormData, setUpdateFormData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const userCurrentInfo = useSelector((state) => state.currentInfo);

  useEffect(() => {
    populateTable();
  }, []);
  const populateTable = () => {
    getList(userCurrentInfo, pageNo, pageSize, setTableData);
  };
  const updateToTable = (row) => {
    console.log(row);
    setIsDisabled(false);
    setUpdateFormData(row);
  };
  const viewData = (row) => {
    setUpdateFormData(row);
    setIsDisabled(true);
  };

  const createToTable = () => {
    setUpdateFormData(formsInitialValues);
    setIsDisabled(false);
    setModalOpen(true);
  };

  //close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  //submit button click;
  const submitBtnClick = (values, formik) => {
    return createUser(values, formik, populateTable, setUpdateFormData);
  };
  return (
    <>
      {isLoading && <Loading />}
      <div className='d-flex justify-content-between'>
        <h1>User</h1>
      </div>

      <ModalComponent
        modalSate={isModalOpen}
        modalClose={closeModal}
        fixed={true}
        size='lg'
        title='Customer'
      >
        <UserForm
          updateFormData={updateFormData}
          isDisabled={isDisabled}
          submitBtnClick={submitBtnClick}
          setLoading={setLoading}
        />
      </ModalComponent>

      <UserTable
        data={tableData}
        updateToTable={updateToTable}
        viewData={viewData}
        createEvent={createToTable}
      />
    </>
  );
}

export default User;
