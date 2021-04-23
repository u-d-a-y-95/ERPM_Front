import React from "react";
import { customerViewUpdatePayloadData, tableConfig } from "./util";
import SimpleMasterTable from "../../../common/composite-component/simple-master-list";

const CustomerTable = (props) => {
  const config = tableConfig;
  config.data = props.data;
  config.action = [
    {
      icon: "fa fa-eye",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        const newData = customerViewUpdatePayloadData(row);
        props.viewData(newData);
      },
    },
    {
      icon: "fa fa-edit",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        const newData = customerViewUpdatePayloadData(row);
        props.updateToTable(newData);
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
