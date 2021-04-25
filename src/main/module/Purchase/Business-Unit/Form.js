import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { formValidationSchema } from "./util";
import MasterInput from "../../../common/base-component/master-input";
import MasterErrorText from "../../../common/base-component/master-errortext";
import FormikSaveButton from "../../../common/composite-component/formik-save-button";
import FormikResetButton from "../../../common/composite-component/formik-reset-button";

const BusinessUnitForm = ({ updateFormData, isDisabled, submitBtnClick }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: updateFormData,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      submitBtnClick(values, formik);
    },
  });

  return (
    <>
      <div className='row'>
        <div className='col-12 col-md-4 col-lg-4'>
          <MasterInput
            type='text'
            label='Enter Business Unit'
            name='businessUnitName'
            placeholder='Business Unit'
            value={formik.values?.businessUnitName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            disabled={isDisabled}
          />
          {formik.errors?.businessUnitName &&
            formik.touched?.businessUnitName && (
              <MasterErrorText message={formik.errors?.businessUnitName} />
            )}
        </div>
        <div className='col-md-4 col-lg-4'>
          <MasterInput
            type='text'
            label='Enter code'
            placeholder='Code'
            name='businessUnitCode'
            value={formik.values?.businessUnitCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            disabled={isDisabled}
          />
          {formik.errors?.businessUnitCode &&
            formik.touched?.businessUnitCode && (
              <MasterErrorText message={formik.errors?.businessUnitCode} />
            )}
        </div>
        <div className='col-md-4 col-lg-4'>
          <MasterInput
            type='text'
            label='Enter Address'
            placeholder='Address'
            name='businessUnitAddress'
            value={formik.values?.businessUnitAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            disabled={isDisabled}
          />
          {formik.errors?.businessUnitAddress &&
            formik.touched?.businessUnitAddress && (
              <MasterErrorText message={formik.errors.businessUnitAddress} />
            )}
        </div>
        {/* <div className='col-md-4 col-lg-3'>
          <MasterSelect
            label='Base Currency'
            name='baseCurrency'
            placeholder='Base Currency'
            data={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
            // data={currencyDropdownList}
            value={formik.values?.baseCurrency}
            onChange={(value) => formik.setFieldValue("baseCurrency", value)}
            onBlur={formik.handleBlur}
            required={true}
            disabled={isDisabled}
          />
          {formik.errors?.baseCurrency && formik.touched?.baseCurrency && (
            <MasterErrorText message={formik.errors?.baseCurrency} />
          )}
        </div> */}
        <div className='col-12 mt-3'></div>
        {!isDisabled && (
          <div className='col-md-12 text-right'>
            <FormikSaveButton
              id={updateFormData?.businessUnitId}
              formik={formik}
            />
            <FormikResetButton
              className='ml-2'
              formik={formik}
              formikData={updateFormData}
            />
          </div>
        )}
        <div className='col-12 mb-2'></div>
      </div>
    </>
  );
};

export default BusinessUnitForm;
