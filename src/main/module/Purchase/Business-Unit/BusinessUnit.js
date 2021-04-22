/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import BusinessUnitForm from "./Form";
import BusinessUnitTable from "./Table";
import { getList } from "./http";

const BusinessUnit = () => {
  const accId = 1;
  const searchTerm = "";
  const [tableData, setTableData] = useState([]);
  const [updateFormData, setUpdateFormData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    populateTable();
  }, []);
  const populateTable = () => {
    getList(accId, pageNo, pageSize, setTableData, searchTerm);
  };

  const updateToTable = (row) => {
    setUpdateFormData(row);
    setIsDisabled(false);
  };
  const viewData = (row) => {
    setUpdateFormData(row);
    setIsDisabled(true);
  };
  return (
    <>
      <h1 className=''>Business Unit</h1>
      <BusinessUnitForm
        populateTable={populateTable}
        updateFormData={updateFormData}
        setUpdateFormData={setUpdateFormData}
        isDisabled={isDisabled}
      />
      <BusinessUnitTable
        data={tableData}
        updateToTable={updateToTable}
        viewData={viewData}
      />
    </>
  );
};

export default BusinessUnit;
