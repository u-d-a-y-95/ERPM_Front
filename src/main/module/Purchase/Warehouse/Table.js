import React from "react";
import { warehouseViewUpdatePayloadData, tableConfig } from "./util";
import SimpleMasterTable from "../../../common/composite-component/simple-master-list";

const WarehouseTable = ({ data, viewData, updateToTable, createEvent }) => {
  const config = tableConfig;
  config.data = data;
  config.create = createEvent;
  config.action = [
    {
      icon: "fa fa-eye",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        const newData = warehouseViewUpdatePayloadData(row);
        viewData(newData);
      },
    },
    {
      icon: "fa fa-edit",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        const newData = warehouseViewUpdatePayloadData(row);
        updateToTable(newData);
      },
    },
    // {
    //   icon: "fa fa-trash",
    //   className: "btn btn-sm btn-warning text-white",
    //   event: (row) => {
    //     // props.deleteFromTable(row.id);
    //   },
    // },
  ];
  return (
    <>
      <SimpleMasterTable config={config} />
    </>
  );
};

export default WarehouseTable;
