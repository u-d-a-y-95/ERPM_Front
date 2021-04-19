/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import BusinessUnitForm from "./From";
import BusinessUnitTable from "./Table";
import { businessUnitDeleteData, getList } from "./http";

const BusinessUnit = () => {
  const accId = 1;
  const [tableData, setTableData] = useState([]);
  const [upDate, setUpData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    populateTable();
  }, []);
  const populateTable = () => {
    getList(accId, pageNo, pageSize, setTableData);
  };

  // const deleteFromTable = (id) => {
  //   businessUnitDeleteData(id, populateTable);
  // };
  const updateToTable = (row) => {
    setUpData(row);
  };
  const viewData = (row) => {
    setUpData(row);
    setIsDisabled(true);
  };
  return (
    <>
      <h1 className=''>Business Unit</h1>
      <BusinessUnitForm
        populateTable={populateTable}
        upDate={upDate}
        setUpData={setUpData}
        isDisabled={isDisabled}
      />
      <BusinessUnitTable
        data={tableData}
        // deleteFromTable={deleteFromTable}
        updateToTable={updateToTable}
        viewData={viewData}
      />
    </>
  );
};

export default BusinessUnit;
