import React, { useState, useEffect } from "react";
import ItemCategoryForm from "./Form";
import { getList } from "./http";
// import { getList, purchaseOrderDeleteData } from './http'
import ItemCategoryTable from "./Table";

function ItemCategory() {
  const accountId = 1;
  const businessUnitId = 1;
  const [tableData, setTableData] = useState([]);
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
      <h3 className="">New Item Category</h3>
      <ItemCategoryForm
        populateTable={populateTable}
        updateFormData={updateFormData}
        setUpdateFormData={setUpdateFormData}
        isDisabled={isDisabled}
        accountId={accountId}
        businessUnitId={businessUnitId}
      />
      <h3 className="text-center my-2">Item Category</h3>
       <ItemCategoryTable
        data={tableData}
        updateToTable={updateToTable}
        viewData={viewData} 
      />
    </>
  );
}

export default ItemCategory;
