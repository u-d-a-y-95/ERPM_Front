import React from "react";
import SimpleMasterTable from "../../../../common/composite-component/simple-master-list";
import { tableConfig } from "./util";

const ItemSubCategoryTable = ({
  viewData,
  updateToTable,
  data,
  createEvent,
}) => {
  const config = tableConfig;
  config.data = data;
  config.create = createEvent;
  config.action = [
    {
      icon: "fa fa-eye",
      className: "btn btn-sm btn-primary text-white",
      event: viewData,
    },
    {
      icon: "fa fa-edit",
      className: "btn btn-sm btn-primary text-white",
      event: updateToTable,
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

export default ItemSubCategoryTable;
