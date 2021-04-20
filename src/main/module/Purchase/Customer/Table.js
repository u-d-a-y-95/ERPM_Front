import React from "react";
import { tableConfig } from "./util";
import SimpleMasterTable from "../../../common/composite-component/simple-master-list";

const CustomerTable = (props) => {
  const config = tableConfig;
  config.data = props.data;
  config.action = [
    {
      icon: "fa fa-eye",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        props.viewData(row);
      },
    },
    {
      icon: "fa fa-edit",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        props.updateToTable(row?.supplierId);
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

export default CustomerTable;
