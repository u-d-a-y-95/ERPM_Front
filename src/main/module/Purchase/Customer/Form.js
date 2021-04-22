import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { initialValues, formValidationSchema, onSubmit } from "./util";
import MasterInput from "../../../common/base-component/master-input";
import MasterErrorText from "../../../common/base-component/master-errortext";
import FormikSaveButton from "../../../common/composite-component/formik-save-button";
import FormikResetButton from "../../../common/composite-component/formik-reset-button";
import {
  createCustomer,
  customerDropdownListAction,
  updateCustomer,
} from "./http";
import MasterSelect from "../../../common/base-component/master-select";

<<<<<<< HEAD
const CustomerForm = ({
  updateFormData,
  populateTable,
  isDisabled,
  setUpdateFormData,
}) => {
  const [customerDropdownList, setCustomerDropdownList] = useState([]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: updateFormData || initialValues,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      if (updateFormData?.customerId) {
        return updateCustomer(values, formik, populateTable, setUpdateFormData);
      }
      return createCustomer(values, formik, populateTable, setUpdateFormData);
=======
const CustomerForm = (props) => {
  const [customerDropdownList, setCustomerDropdownList] = useState([]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: props.upDate || initialValues,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      if (props.upDate?.intBusinessUnitId) {
        return updateCustomer(values, formik, props.populateTable);
      }
      return createCustomer(values, formik, props.populateTable);
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
    },
  });

  useEffect(() => {
    customerDropdownListAction(setCustomerDropdownList);
  }, []);

  return (
    <>
      <div className='row'>
        <div className='col-md-4 col-lg-3'>
          <MasterSelect
            label='Customer Type'
            name='customerType'
            placeholder='Customer Type'
<<<<<<< HEAD
            data={customerDropdownList}
=======
            data={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
            // data={customerDropdownList}
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
            value={formik.values?.customerType}
            onChange={(value) => formik.setFieldValue("customerType", value)}
            onBlur={formik.handleBlur}
            required={true}
<<<<<<< HEAD
            disabled={isDisabled}
=======
            disabled={props.isDisabled}
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
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
<<<<<<< HEAD
            disabled={isDisabled}
=======
            disabled={props.isDisabled}
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
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
<<<<<<< HEAD
            disabled={isDisabled}
=======
            disabled={props.isDisabled}
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
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
<<<<<<< HEAD
            disabled={isDisabled}
=======
            disabled={props.isDisabled}
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
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
<<<<<<< HEAD
            disabled={isDisabled}
=======
            disabled={props.isDisabled}
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
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
<<<<<<< HEAD
            disabled={isDisabled}
=======
            disabled={props.isDisabled}
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
          />
          {formik.errors?.billingAddress && formik.touched?.billingAddress && (
            <MasterErrorText message={formik.errors.billingAddress} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
<<<<<<< HEAD
            type='text'
=======
            type='number'
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
            label='Contact Number'
            placeholder='Contact Number'
            name='contactNumber'
            value={formik.values?.contactNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
<<<<<<< HEAD
            disabled={isDisabled}
=======
            disabled={props.isDisabled}
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
          />
          {formik.errors?.contactNumber && formik.touched?.contactNumber && (
            <MasterErrorText message={formik.errors.contactNumber} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
<<<<<<< HEAD
            type='text'
=======
            type='number'
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
            label='NID'
            placeholder='NID number'
            name='nid'
            value={formik.values?.nid}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
<<<<<<< HEAD
            disabled={isDisabled}
=======
            disabled={props.isDisabled}
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
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
<<<<<<< HEAD
            disabled={isDisabled}
=======
            disabled={props.isDisabled}
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
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
            name='licenseNo'
            value={formik.values?.licenseNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
<<<<<<< HEAD
            disabled={isDisabled}
=======
            disabled={props.isDisabled}
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
          />
          {formik.errors?.licenseNo && formik.touched?.licenseNo && (
            <MasterErrorText message={formik.errors.licenseNo} />
          )}
        </div>
        <div className='col-md-12 mt-3 text-left'>
<<<<<<< HEAD
          <FormikSaveButton id={updateFormData?.customerId} formik={formik} />
          <FormikResetButton
            className='ml-2'
            formik={formik}
            formikData={setUpdateFormData}
=======
          <FormikSaveButton formik={formik} />
          <FormikResetButton
            className='ml-2'
            formik={formik}
            formikData={props.setUpData}
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
          />
        </div>
      </div>
    </>
  );
};

export default CustomerForm;
