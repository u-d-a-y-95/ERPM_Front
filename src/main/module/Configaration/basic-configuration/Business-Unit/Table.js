import React from "react";
import { tableConfig } from "./util";
import SimpleMasterTable from "../../../../common/composite-component/simple-master-list";

const BusinessUnitTable = ({ data, viewData, updateToTable, createEvent }) => {
  const config = tableConfig;
  config.data = data;
  config.create = createEvent
  config.action = [
    {
      icon: "fa fa-eye",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        viewData(row);
      },
    },
    {
      icon: "fa fa-edit",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        updateToTable(row);
      },
    },
    // {
    //   icon: "fa fa-trash",
    //   className: "btn btn-sm btn-warning text-white",
    //   event: (row) => {
    //   },
    // },
  ];
  return (
    <>
      <SimpleMasterTable config={config} />
    </>
  );
};

export default BusinessUnitTable;
