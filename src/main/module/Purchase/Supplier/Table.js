import React from "react";
import { supplierViewUpdatePayloadData, tableConfig } from "./util";
import SimpleMasterTable from "../../../common/composite-component/simple-master-list";

const BusinessUnitTable = ({ viewData, updateToTable, data }) => {
  const config = tableConfig;
  config.data = data;
  config.action = [
    // {
    //   icon: "fa fa-trash",
    //   className: "btn btn-sm btn-warning text-white",
    //   event: (row) => {
    //     // props.deleteFromTable(row.id);
    //   },
    // },
    {
      icon: "fa fa-eye",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        console.log(row);
        const newData = supplierViewUpdatePayloadData(row);
        viewData(newData);
      },
    },
    {
      icon: "fa fa-edit",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        const newData = supplierViewUpdatePayloadData(row);
        updateToTable(newData);
      },
    },
  ];
  return (
    <>
      <SimpleMasterTable config={config} />
    </>
  );
};

export default BusinessUnitTable;
