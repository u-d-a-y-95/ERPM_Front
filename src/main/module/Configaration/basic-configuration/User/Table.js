import React from "react";
import {
  tableConfig,
  tableFormExportValues,
  tableFormValidationSchema,
} from "./util";
import SimpleMasterTable from "../../../../common/composite-component/simple-master-list";
import { useFormik } from "formik";
import MasterSelect from "../../../../common/base-component/master-select";
import MasterErrorText from "../../../../common/base-component/master-errortext";

const UserTable = ({ data, viewData, updateToTable, createEvent }) => {
  const config = tableConfig;
  config.data = data;
  config.create = createEvent;
  config.action = [
    // {
    //   icon: "fa fa-eye",
    //   className: "btn btn-sm btn-primary text-white",
    //   event: viewData,
    // },
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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: tableFormExportValues,
    validationSchema: tableFormValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={formik?.handleSubmit}>
        <div className='row'>
          <div className='col-md-4 col-lg-3'>
            <MasterSelect
              label='User Type'
              name='userType'
              data={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
              value={formik.values?.userType}
              onChange={(value) => {
                formik.setFieldValue("userType", value);
              }}
              onBlur={formik.handleBlur}
              // disabled={isDisabled}
              required={true}
              placeholder='Select User Type'
            />

            {formik?.errors?.userType && formik?.touched?.userType ? (
              <MasterErrorText message={formik?.errors?.userType} />
            ) : null}
          </div>
          <div className='col-md-4 col-lg-3'>
            <MasterSelect
              label='Status'
              name='status'
              data={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
              value={formik.values?.status}
              onChange={(value) => {
                formik.setFieldValue("status", value);
              }}
              onBlur={formik.handleBlur}
              // disabled={isDisabled}
              required={true}
              placeholder='Select User Type'
            />

            {formik?.errors?.status && formik?.touched?.status ? (
              <MasterErrorText message={formik?.errors?.status} />
            ) : null}
          </div>
          <div className='com-md-12' style={{ marginTop: "33px" }}>
            <button
              className='btn btn-primary btn-sm'
              type='submit'
              onClick={formik?.submitForm}
            >
              Add
            </button>
          </div>
        </div>
      </form>

      <SimpleMasterTable config={config} />
    </>
  );
};

export default UserTable;
