/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import CustomerForm from "./Form";
import CustomerTable from "./Table";
import { getList } from "./http";

const Customer = () => {
  const accId = 1;
  const businessUnitId = 1;
  const searchValue = "somethingSearch";

  const [tableData, setTableData] = useState([]);
  const [updateFormData, setUpdateFormData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    populateTable();
  }, []);
  const populateTable = () => {
    getList(accId, pageNo, pageSize, setTableData, businessUnitId, searchValue);
  };

  const updateToTable = (row) => {
    setUpdateFormData(row);
  };
  const viewData = (row) => {
    setUpdateFormData(row);
    setIsDisabled(true);
  };
  return (
    <>
      <h1>Customer</h1>
      <CustomerForm
        populateTable={populateTable}
        upDate={updateFormData}
        setUpData={setUpdateFormData}
        isDisabled={isDisabled}
      />
      <CustomerTable
        data={tableData}
        // deleteFromTable={deleteFromTable}
        updateToTable={updateToTable}
        viewData={viewData}
      />
    </>
  );
};

export default Customer;
