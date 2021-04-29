import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { formValidationSchema } from "./util";
import MasterInput from "../../../../common/base-component/master-input";
import MasterErrorText from "../../../../common/base-component/master-errortext";
import FormikSaveButton from "../../../../common/composite-component/formik-save-button";
import FormikResetButton from "../../../../common/composite-component/formik-reset-button";
import { supplierDropdownListAction } from "./http";
import MasterSelect from "../../../../common/base-component/master-select";

const BusinessUnitForm = ({
  updateFormData,
  setUpdateFormData,
  isDisabled,
  submitBtnClick,
  setLoading,
}) => {
  const [supplierDropdownList, setSupplierDropdownList] = useState([]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: updateFormData,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      submitBtnClick(values, formik);
    },
  });

  useEffect(() => {
    supplierDropdownListAction(setSupplierDropdownList, setLoading);
  }, []);

  return (
    <>
      <form>
        <div className='row'>
          <div className='col-md-4 col-lg-4'>
            <MasterSelect
              label='Supplier Type'
              name='supplierType'
              placeholder='Supplier Type'
              data={supplierDropdownList}
              value={formik.values?.supplierType}
              onChange={(value) => formik.setFieldValue("supplierType", value)}
              onBlur={formik.handleBlur}
              required={true}
              disabled={isDisabled}
            />
            {formik.errors?.supplierType && formik.touched?.supplierType && (
              <MasterErrorText message={formik.errors?.supplierType} />
            )}
          </div>
          <div className='col-md-4 col-lg-4'>
            <MasterInput
              type='text'
              label='Supplier Name'
              placeholder='Supplier name'
              name='supplierName'
              value={formik.values?.supplierName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required={true}
              disabled={isDisabled}
            />
            {formik.errors?.supplierName && formik.touched?.supplierName && (
              <MasterErrorText message={formik.errors?.supplierName} />
            )}
          </div>
          <div className='col-md-4 col-lg-4'>
            <MasterInput
              type='text'
              label='Contact Number'
              placeholder='Contact Number'
              name='contactNumber'
              value={formik.values?.contactNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required={true}
              disabled={isDisabled}
            />
            {formik.errors?.contactNumber && formik.touched?.contactNumber && (
              <MasterErrorText message={formik.errors.contactNumber} />
            )}
          </div>
          <div className='col-md-4 col-lg-4'>
            <MasterInput
              type='text'
              label='Address'
              placeholder='Address'
              name='supplierAddress'
              value={formik.values?.supplierAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required={true}
              disabled={isDisabled}
            />
            {formik.errors?.supplierAddress &&
              formik.touched?.supplierAddress && (
                <MasterErrorText message={formik.errors.supplierAddress} />
              )}
          </div>
          <div className='col-md-4 col-lg-4'>
            <MasterInput
              type='email'
              label='Email'
              placeholder='Email'
              name='email'
              value={formik.values?.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required={true}
              disabled={isDisabled}
            />
            {formik.errors?.email && formik.touched?.email && (
              <MasterErrorText message={formik.errors.email} />
            )}
          </div>
          <div className='col-md-4 col-lg-4'>
            <MasterInput
              type='text'
              label='NID'
              placeholder='NID number'
              name='nid'
              value={formik.values?.nid}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required={true}
              disabled={isDisabled}
            />
            {formik.errors?.nid && formik.touched?.nid && (
              <MasterErrorText message={formik.errors.nid} />
            )}
          </div>
          <div className='col-md-4 col-lg-4'>
            <MasterInput
              type='text'
              label='BIN'
              placeholder='BIN'
              name='bin'
              value={formik.values?.bin}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // required={true}
              disabled={isDisabled}
            />
            {formik.errors?.bin && formik.touched?.bin && (
              <MasterErrorText message={formik.errors.bin} />
            )}
          </div>
          <div className='col-md-4 col-lg-4'>
            <MasterInput
              type='text'
              label='Licence Number'
              placeholder='Licence number'
              name='licenseNo'
              value={formik.values?.licenseNo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required={true}
              disabled={isDisabled}
            />
            {formik.errors?.licenseNo && formik.touched?.licenseNo && (
              <MasterErrorText message={formik.errors.licenseNo} />
            )}
          </div>
          <div className='col-12 mt-5'></div>
          {!isDisabled && (
            <div className='col-md-12 mt-3 text-right'>
              <FormikSaveButton
                id={updateFormData?.supplierId}
                formik={formik}
              />
              <FormikResetButton
                className='ml-2'
                formik={formik}
                formikData={setUpdateFormData}
              />
            </div>
          )}
          <div className='col-12 mb-3'></div>
        </div>
      </form>
    </>
  );
};

export default BusinessUnitForm;
