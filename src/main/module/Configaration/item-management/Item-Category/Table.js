import React from "react";
import SimpleMasterTable from "../../../../common/composite-component/simple-master-list";
import { itemCategoryViewUpdatePayloadData, tableConfig } from "./util";

const ItemCategoryTable = ({ viewData, updateToTable, data, createEvent }) => {
  const config = tableConfig;
  config.data = data;
  config.create = createEvent;
  config.action = [
    {
      icon: "fa fa-edit",
      className: "btn btn-sm btn-primary text-white",
      event: updateToTable
    },
    {
      icon: "fa fa-eye",
      className: "btn btn-sm btn-primary text-white",
      event: viewData
    },
  ];

  return (
    <>
      <SimpleMasterTable config={config} />
    </>
  );
};

export default ItemCategoryTable;
