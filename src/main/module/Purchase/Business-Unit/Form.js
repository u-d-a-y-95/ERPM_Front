import React from "react";
import { useFormik } from "formik";
import { initialValues, formValidationSchema, onSubmit } from "./util";
import MasterInput from "../../../common/base-component/master-input";
import MasterErrorText from "../../../common/base-component/master-errortext";
import FormikSaveButton from "../../../common/composite-component/formik-save-button";
import FormikResetButton from "../../../common/composite-component/formik-reset-button";
import { createBusinessUnit, updateBusinessUnit } from "./http";

const BusinessUnitForm = (props) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: props.upDate || initialValues,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      if (props.upDate?.intBusinessUnitId) {
        updateBusinessUnit(values, formik, props.populateTable);
      }
      createBusinessUnit(values, formik, props.populateTable);
    },
  });

  return (
    <>
      <div className='row'>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='text'
            label='Enter Business Unit'
            name='businessUnitName'
            placeholder='Business Unit'
            value={formik.values?.businessUnitName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            disabled={props.isDisabled}
          />
          {formik.errors?.businessUnitName &&
            formik.touched?.businessUnitName && (
              <MasterErrorText message={formik.errors?.businessUnitName} />
            )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='text'
            label='Enter code'
            placeholder='Code'
            name='businessUnitCode'
            value={formik.values?.businessUnitCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            disabled={props.isDisabled}
          />
          {formik.errors?.businessUnitCode &&
            formik.touched?.businessUnitCode && (
              <MasterErrorText message={formik.errors?.businessUnitCode} />
            )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='text'
            label='Enter Address'
            placeholder='Address'
            name='businessUnitAddress'
            value={formik.values?.businessUnitAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            disabled={props.isDisabled}
          />
          {formik.errors?.businessUnitAddress &&
            formik.touched?.businessUnitAddress && (
              <MasterErrorText message={formik.errors.businessUnitAddress} />
            )}
        </div>
        <div className='col-md-12 mt-3 text-left'>
          <FormikSaveButton formik={formik} />
          <FormikResetButton
            className='ml-2'
            formik={formik}
            formikData={props.setUpData}
          />
        </div>
      </div>
    </>
  );
};

export default BusinessUnitForm;
