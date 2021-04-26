import React, { useState, useEffect } from "react";
import UserForm from "./Form";
import ItemProfileForm from "./Form";
import { getList } from "./http";
// import { getList, purchaseOrderDeleteData } from './http'
import ItemProfileTable from "./Table";

function User() {
  const accountId = 1;
  const businessUnitId = 1;
  const [tableData, setTableData] = useState([]);
  // const [updateFromData, setUpdateFromData] = useState({});
  const [updateFormData, setUpdateFormData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    populateTable();
  }, []);
  const populateTable = () => {
    getList(accountId, businessUnitId, pageNo, pageSize, setTableData);
  };
  const updateToTable = (row) => {
    console.log(row)
    setIsDisabled(false);
    setUpdateFormData(row);
  };
  const viewData = (row) => {
    setUpdateFormData(row);
    setIsDisabled(true);
  };

  return (
    <>
      <UserForm
        populateTable={populateTable}
        updateFormData={updateFormData}
        setUpdateFormData={setUpdateFormData}
        isDisabled={isDisabled}
        accountId={accountId}
        businessUnitId={businessUnitId}
      />
      {/* <h3 className="my-3 text-center">Item Basic Information</h3> */}
      {/* <UserTable
        data={tableData}
        // deleteFromTable={deleteFromTable}
        updateToTable={updateToTable}
        viewData={viewData}
      /> */}
    </>
  );
}

export default User;