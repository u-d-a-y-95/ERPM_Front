import React from "react";
import SimpleMasterTable from "../../../common/composite-component/simple-master-list";
import { tableConfig } from "./util";

const ItemProfileTable = (props) => {
  const config = tableConfig;
  config.data = props.data;
  config.action = [
    // {
    //     icon: 'fa fa-trash',
    //     className: "btn btn-sm btn-warning text-white",
    //     event: (row) => {
    //         props.deleteFromTable(row.id)
    //     }
    // },
    {
      icon: "fa fa-edit",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        props.updateToTable(row);
      },
    },
    {
      icon: "fa fa-eye",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        props.viewData(row);
      },
    },
  ];

  return (
    <>
      <SimpleMasterTable config={config} />
    </>
  );
};

export default ItemProfileTable;
