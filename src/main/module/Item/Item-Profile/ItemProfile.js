import React, { useState, useEffect } from "react";
import ItemProfileForm from "./Form";
import { getList } from "./http";
// import { getList, purchaseOrderDeleteData } from './http'
import ItemProfileTable from "./Table";

function ItemProfile() {
  const [tableData, setTableData] = useState([]);
  const [updateFromData, setUpdateFromData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isDisabled, setIsDisabled] = useState(false);
  const acountId = 1;
  const businessId = 1234;

  useEffect(() => {
    populateTable();
  }, []);
  const populateTable = () => {
    getList(setTableData);
  };
  // const deleteFromTable = (id) => {
  //     purchaseOrderDeleteData(id, populateTable)
  // }
  const updateToTable = (row) => {
    setUpdateFromData(row);
  };
  const viewData = (row) => {
    setUpdateFromData(row);
    setIsDisabled(true);
  };
  return (
    <>
      <ItemProfileForm
        populateTable={populateTable}
        updateFromData={updateFromData}
        setUpdateFromData={setUpdateFromData}
        isDisabled={isDisabled}
        accountId={acountId}
        businessId={businessId}
      />
      <h3 className="my-3 text-center">Item Basic Information</h3>
      <ItemProfileTable
        data={tableData}
        // deleteFromTable={deleteFromTable}
        updateToTable={updateToTable}
        viewData={viewData}
      />
    </>
  );
}

export default ItemProfile;
