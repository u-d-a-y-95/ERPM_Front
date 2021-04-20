/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import SupplierForm from "./Form";
import SupplierTable from "./Table";
import { businessUnitDeleteData, getList, getRowById } from "./http";

const Supplier = () => {
  const accId = 1;
  const [tableData, setTableData] = useState([]);
  const [updateFormData, setUpdateFormData] = useState({});
  // const [currentRowId, setCurrentRowId] = useState("");
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    populateTable();
  }, []);
  const populateTable = () => {
    getList(accId, pageNo, pageSize, setTableData);
  };

  const updateToTable = (row) => {
    // getRowById()
    setUpdateFormData(row);
  };
  const viewData = (row) => {
    setUpdateFormData(row);
    setIsDisabled(true);
  };
  return (
    <>
      <h1 className=''>Supplier</h1>
      <SupplierForm
        populateTable={populateTable}
        updateFormData={updateFormData}
        setUpdateFormData={setUpdateFormData}
        isDisabled={isDisabled}
      />
      <SupplierTable
        data={tableData}
        // deleteFromTable={deleteFromTable}
        updateToTable={updateToTable}
        viewData={viewData}
      />
    </>
  );
};

export default Supplier;
