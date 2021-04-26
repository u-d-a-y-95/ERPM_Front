import React from "react";
import { customerViewUpdatePayloadData, tableConfig } from "./util";
import SimpleMasterTable from "../../../common/composite-component/simple-master-list";
import MasterInput from "../../../common/base-component/master-input";
import { useFormik } from "formik";
import MasterErrorText from "../../../common/base-component/master-errortext";

const PurchaseRequestTable = ({
  data,
  viewData,
  updateToTable,
  createEvent,
}) => {
  const config = tableConfig;
  config.data = data;
  config.create = createEvent;
  config.action = [
    {
      icon: "fa fa-eye",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        const newData = customerViewUpdatePayloadData(row);
        viewData(newData);
      },
    },
    {
      icon: "fa fa-edit",
      className: "btn btn-sm btn-primary text-white",
      event: (row) => {
        const newData = customerViewUpdatePayloadData(row);
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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {},
    validationSchema: {},
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className='row'>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='text'
            label='Customer Name'
            placeholder='Customer name'
            name='customerName'
            value={formik.values?.customerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            // disabled={isDisabled}
          />
          {formik.errors?.customerName && formik.touched?.customerName && (
            <MasterErrorText message={formik.errors?.customerName} />
          )}
        </div>
      </div>
      <SimpleMasterTable config={config} />
    </>
  );
};

export default PurchaseRequestTable;
