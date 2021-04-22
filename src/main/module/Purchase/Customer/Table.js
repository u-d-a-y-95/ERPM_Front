import React from "react";
<<<<<<< HEAD
import { tableConfig, viewUpdatePayloadData } from "./util";
=======
import { tableConfig } from "./util";
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
import SimpleMasterTable from "../../../common/composite-component/simple-master-list";

const CustomerTable = (props) => {
  const config = tableConfig;
  config.data = props.data;
  config.action = [
    {
      icon: "fa fa-eye",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
<<<<<<< HEAD
        const newData = viewUpdatePayloadData(row);
        props.viewData(newData);
=======
        props.viewData(row);
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
      },
    },
    {
      icon: "fa fa-edit",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
<<<<<<< HEAD
        const newData = viewUpdatePayloadData(row);
        props.updateToTable(newData);
=======
        props.updateToTable(row);
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
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
