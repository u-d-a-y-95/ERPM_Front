import React from "react";
import SimpleMasterTable from "../../../common/composite-component/simple-master-list";
import { tableConfig, itemProfileViewUpdatePayloadData } from "./util";

const ItemProfileTable = ({viewData, updateToTable, data}) => {
  const config = tableConfig;
  config.data = data;
  config.action = [    
    {
      icon: "fa fa-edit",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        console.log(row)
        const newData = itemProfileViewUpdatePayloadData(row);
        updateToTable(newData);
      },
    },
    {
      icon: "fa fa-eye",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        const newData = itemProfileViewUpdatePayloadData(row);
        viewData(newData);
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
