import React from "react";
import SimpleMasterTable from "../../../common/composite-component/simple-master-list";
import { tableConfig, itemProfileViewUpdatePayloadData } from "./util";

const WarehouseLocationTable = ({viewData, updateToTable, data, createEvent}) => {
  const config = tableConfig;
  config.data = data;
  config.create = createEvent
  config.action = [    
    {
      icon: "fa fa-edit",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        console.log(row)
        // const newData = itemProfileViewUpdatePayloadData(row);
        updateToTable(row);
      },
    },
    {
      icon: "fa fa-eye",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        // const newData = itemProfileViewUpdatePayloadData(row);
        viewData(row);
      },
    },
  ];

  return (
    <>
      <SimpleMasterTable config={config} />
    </>
  );
};

export default WarehouseLocationTable;
