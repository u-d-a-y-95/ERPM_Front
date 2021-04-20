import React from "react";
import { useFormik } from "formik";
import { initialValues, formValidationSchema, onSubmit } from "./util";
import MasterInput from "../../../common/base-component/master-input";
import MasterErrorText from "../../../common/base-component/master-errortext";
import FormikSaveButton from "../../../common/composite-component/formik-save-button";
import FormikResetButton from "../../../common/composite-component/formik-reset-button";
import { createSupplier, updateSupplier } from "./http";
import MasterSelect from "../../../common/base-component/master-select";

const CustomerForm = (props) => {
  const formik = useFormik({
    enableReinitialize: true,
    // initialValues: props.upDate || initialValues,
    initialValues: initialValues,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("values", values);
      // if (props.upDate?.intBusinessUnitId) {
      //   updateBusinessUnit(values, formik, props.populateTable);
      // }
      // createBusinessUnit(values, formik, props.populateTable);
    },
  });

  return (
    <>
      <div className='row'>
        <div className='col-md-4 col-lg-3'>
          <MasterSelect
            label='Customer Type'
            name='customerType'
            placeholder='Customer Type'
            data={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
            value={formik.values?.customerType}
            onChange={(value) => formik.setFieldValue("customerType", value)}
            onBlur={formik.handleBlur}
            required={true}
            disabled={props.isDisabled}
          />
          {formik.errors?.customerType && formik.touched?.customerType && (
            <MasterErrorText message={formik.errors?.customerType} />
          )}
        </div>
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
            disabled={props.isDisabled}
          />
          {formik.errors?.customerName && formik.touched?.customerName && (
            <MasterErrorText message={formik.errors?.customerName} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='text'
            label='Address'
            placeholder='Address'
            name='customerAddress'
            value={formik.values?.customerAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            disabled={props.isDisabled}
          />
          {formik.errors?.customerAddress &&
            formik.touched?.customerAddress && (
              <MasterErrorText message={formik.errors.customerAddress} />
            )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='email'
            label='Email'
            placeholder='Email'
            name='customerEmail'
            value={formik.values?.customerEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // required={true}
            disabled={props.isDisabled}
          />
          {formik.errors?.customerEmail && formik.touched?.customerEmail && (
            <MasterErrorText message={formik.errors.customerEmail} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='text'
            label='Billing Name'
            placeholder='Billing Name'
            name='billingName'
            value={formik.values?.billingName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            disabled={props.isDisabled}
          />
          {formik.errors?.billingName && formik.touched?.billingName && (
            <MasterErrorText message={formik.errors.billingName} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='text'
            label='Billing Address'
            placeholder='Billing Address'
            name='billingAddress'
            value={formik.values?.billingAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            disabled={props.isDisabled}
          />
          {formik.errors?.billingAddress && formik.touched?.billingAddress && (
            <MasterErrorText message={formik.errors.billingAddress} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='number'
            label='Contact Number'
            placeholder='Contact Number'
            name='contactNumber'
            value={formik.values?.contactNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            disabled={props.isDisabled}
          />
          {formik.errors?.contactNumber && formik.touched?.contactNumber && (
            <MasterErrorText message={formik.errors.contactNumber} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='number'
            label='NID'
            placeholder='NID number'
            name='nid'
            value={formik.values?.nid}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            disabled={props.isDisabled}
          />
          {formik.errors?.nid && formik.touched?.nid && (
            <MasterErrorText message={formik.errors.nid} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='text'
            label='BIN'
            placeholder='BIN'
            name='bin'
            value={formik.values?.bin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // required={true}
            disabled={props.isDisabled}
          />
          {formik.errors?.bin && formik.touched?.bin && (
            <MasterErrorText message={formik.errors.bin} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='text'
            label='Licence Number'
            placeholder='Licence number'
            name='licenceNumber'
            value={formik.values?.licenceNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            disabled={props.isDisabled}
          />
          {formik.errors?.licenceNumber && formik.touched?.licenceNumber && (
            <MasterErrorText message={formik.errors.licenceNumber} />
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

export default CustomerForm;
