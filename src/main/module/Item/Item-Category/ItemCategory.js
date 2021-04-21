import React, { useState, useEffect } from "react";
import ItemCategoryForm from "./Form";
import { getList } from "./http";
// import { getList, purchaseOrderDeleteData } from './http'
import ItemCategoryTable from "./Table";

function ItemCategory() {
  const [tableData, setTableData] = useState([]);
  const [updateFromData, setUpdateFromData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const accountId = 1;
  const businessId = 1234;

  useEffect(() => {
    populateTable();
  }, []);
  const populateTable = () => {
    getList(accountId, businessId, setTableData);
  };
  // const deleteFromTable = (id) => {
  //     purchaseOrderDeleteData(id, populateTable)
  // }
  const updateToTable = (row) => {
    setUpdateFromData(row);
  };
  return (
    <>
      <h3 className="">New Item Category</h3>
      <ItemCategoryForm
        populateTable={populateTable}
        updateFromData={updateFromData}
        setUpdateFromData={setUpdateFromData}
      />
      <h3 className="text-center my-2">Item Category</h3>
      <ItemCategoryTable
        data={tableData}
        // deleteFromTable={deleteFromTable}
        updateToTable={updateToTable}
      />
    </>
  );
}

export default ItemCategory;
