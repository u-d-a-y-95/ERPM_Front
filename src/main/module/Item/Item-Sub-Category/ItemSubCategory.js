import React, { useState, useEffect } from "react";
import ItemSubCategoryForm from "./Form";
import { getList } from "./http";
// import { getList, purchaseOrderDeleteData } from './http'
import ItemSubCategoryTable from "./Table";

function ItemSubCategory() {
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
    console.log(row);
    setIsDisabled(false);
    setUpdateFormData(row);
  };
  const viewData = (row) => {
    setUpdateFormData(row);
    setIsDisabled(true);
  };
  return (
    <>
      <h3 className="">New Item Sub Category</h3>
      <ItemSubCategoryForm
        populateTable={populateTable}
        updateFormData={updateFormData}
        setUpdateFormData={setUpdateFormData}
        isDisabled={isDisabled}
        accountId={accountId}
        businessUnitId={businessUnitId}
      />
      <h3 className="my-2 text-center">Item Sub Category</h3>
      {/* <ItemSubCategoryTable
        data={tableData}
        // deleteFromTable={deleteFromTable}
        updateToTable={updateToTable}
      /> */}
    </>
  );
}

export default ItemSubCategory;
