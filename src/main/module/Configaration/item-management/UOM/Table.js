import React from "react";
import SimpleMasterTable from "../../../../common/composite-component/simple-master-list";
import { tableConfig } from "./util";

const UnitOfMeasurementTable = ({ data }) => {
  const config = tableConfig;
  config.data = data;

  return (
    <>
      <SimpleMasterTable config={config} />
    </>
  );
};

export default UnitOfMeasurementTable;
