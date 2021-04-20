<<<<<<< HEAD
<<<<<<< HEAD
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
      {/* <ItemCategoryTable
        data={tableData}
        // deleteFromTable={deleteFromTable}
        updateToTable={updateToTable}
      /> */}
    </>
  );
}

export default ItemCategory;
=======
import React, { useState, useEffect } from 'react'
import ItemCategoryForm from './Form';
import { getList } from './http'
=======
import React, { useState, useEffect } from "react";
import ItemCategoryForm from "./Form";
import { getList } from "./http";
>>>>>>> 8a0fc9b (Item Page Design And Api Binding)
// import { getList, purchaseOrderDeleteData } from './http'
import ItemCategoryTable from "./Table";

function ItemCategory() {
  const [tableData, setTableData] = useState([]);
  const [upDate, setUpData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
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
    // console.log(row)
    row["description"] = row["body"];
    setUpData(row);
  };
  return (
    <>
      <h3 className="">New Item Category</h3>
      <ItemCategoryForm
        populateTable={populateTable}
        upDate={upDate}
        setUpData={setUpData}
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

<<<<<<< HEAD

export default ItemCategory
>>>>>>> 28c1f79 (Item Page)
=======
export default ItemCategory;
>>>>>>> 8a0fc9b (Item Page Design And Api Binding)
