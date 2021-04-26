import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { initialValues, formValidationSchema } from "./util";
import MasterInput from "../../../common/base-component/master-input";
import MasterErrorText from "../../../common/base-component/master-errortext";
import FormikSaveButton from "../../../common/composite-component/formik-save-button";
import FormikResetButton from "../../../common/composite-component/formik-reset-button";
import { warehouseDropdownListAction } from "./http";
import MasterSelect from "../../../common/base-component/master-select";

const WarehouseForm = ({
  updateFormData,
  isDisabled,
  submitBtnClick,
  setLoading,
}) => {
  const accountId = 1;
  const [warehouseDropdownList, setWarehouseDropdownList] = useState([]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: updateFormData || initialValues,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      submitBtnClick(values, formik);
    },
  });

  useEffect(() => {
    warehouseDropdownListAction(
      setWarehouseDropdownList,
      setLoading,
      accountId
    );
  }, []);

  return (
    <>
      <div className='row'>
        <div className='col-md-4 col-lg-3'>
          <MasterSelect
            label='Business Unit'
            name='businessUnit'
            placeholder='Customer Type'
            data={warehouseDropdownList}
            value={formik.values?.businessUnit}
            onChange={(value) => formik.setFieldValue("businessUnit", value)}
            onBlur={formik.handleBlur}
            required={true}
            disabled={isDisabled}
          />
          {formik.errors?.businessUnit && formik.touched?.businessUnit && (
            <MasterErrorText message={formik.errors?.businessUnit} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='text'
            label='Warehouse Name'
            placeholder='Warehouse name'
            name='warehouseName'
            value={formik.values?.warehouseName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            disabled={isDisabled}
          />
          {formik.errors?.warehouseName && formik.touched?.warehouseName && (
            <MasterErrorText message={formik.errors?.warehouseName} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='email'
            label='Warehouse Code'
            placeholder='Warehouse Code'
            name='warehouseCode'
            value={formik.values?.warehouseCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={isDisabled}
          />
          {formik.errors?.warehouseCode && formik.touched?.warehouseCode && (
            <MasterErrorText message={formik.errors.warehouseCode} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            type='text'
            label='Address'
            placeholder='Address'
            name='warehouseAddress'
            value={formik.values?.warehouseAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required={true}
            disabled={isDisabled}
          />
          {formik.errors?.warehouseAddress &&
            formik.touched?.warehouseAddress && (
              <MasterErrorText message={formik.errors.warehouseAddress} />
            )}
        </div>

        <div className='col-12 mt-2'></div>
        {!isDisabled && (
          <div className='col-md-12 mt-3 text-right'>
            <FormikSaveButton id={updateFormData?.customerId} formik={formik} />
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

export default WarehouseForm;
