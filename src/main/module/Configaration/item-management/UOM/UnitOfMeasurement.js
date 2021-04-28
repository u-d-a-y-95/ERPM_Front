import React, { useState, useEffect } from "react";
import { getUnitOfMeasurementList } from "./http";
import UnitOfMeasurementTable from "./Table";
import Loading from "../../../../common/composite-component/loading";
import { useSelector } from "react-redux";

function UinitOfMeasurement() {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({});
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [isloading, setLoading] = useState(false);

  const userCurrentInfo = useSelector(state => state.currentInfo)

  useEffect(() => {
    populateTable();
  }, [userCurrentInfo]);

  const populateTable = () => {
    getUnitOfMeasurementList(setTableData, setLoading);
  };

  return (
    <>
      {isloading && <Loading />}
      <div className="d-flex justify-content-between">
        <h3 className="">Unit Of Measurement</h3>
      </div>
      <UnitOfMeasurementTable
        data={tableData}
      />
    </>
  );
}

export default UinitOfMeasurement;
