/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import SupplierForm from "./Form";
import SupplierTable from "./Table";
import { getList } from "./http";

const Supplier = () => {
  const accId = 1;
  const searchTerm = "";
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
    getList(accId, pageNo, pageSize, setTableData, businessUnitId, searchTerm);
  };

  const updateToTable = (row) => {
    setIsDisabled(false);
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
