import React, { useEffect, useState } from "react";
import MasterInput from "../../../common/base-component/master-input";
import MasterErrorText from "../../../common/base-component/master-errortext";
import FormikResetButton from "../../../common/composite-component/formik-reset-button";

import { useFormik } from "formik";

import {
  getWarehouseDropdownListAction,
  getBusinessUnitDropdownListAction,
} from "./http";
import MasterSelect from "../../../common/base-component/master-select";
import FormikSaveButton from "../../../common/composite-component/formik-save-button";
import { formValidationSchema } from './util';

const WarehouseLocationForm = ({
  formData,
  isDisabled,
  submitBtnClick,
  accountId,
  businessUnitId,
  setLoading
}) => {
  const [warehouseDropdownList, setWarehouseDropdownList] = useState([]);
  const [businessUnitDropdownList, setBusinessUnitDropdownList] = useState([]);
  

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formData,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      submitBtnClick(values, formik);
    },
  });

  useEffect(() => {
    getWarehouseDropdownListAction(setWarehouseDropdownList)
    getBusinessUnitDropdownListAction(setBusinessUnitDropdownList, setLoading, 1);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-4 col-lg-4">
        <MasterSelect
            label="Business Unit"
            name="businessUnit"
            data={businessUnitDropdownList}
            value={formik.values?.businessUnit}
            onChange={(value) => {
              formik.setFieldValue("businessUnit", value);
            }}
            onBlur={formik.handleBlur}
            disabled={isDisabled}
            required={true}
            placeholder="Select Business Unit"
          />

          {formik?.errors?.subCategory && formik?.touched?.subCategory ? (
            <MasterErrorText message={formik?.errors?.subCategory} />
          ) : null}
          
        </div>
        <div className="col-md-4 col-lg-4">
          <MasterSelect
            label="Warehouse"
            name="warehouse"
            data={warehouseDropdownList}
            value={formik.values?.warehouse}
            onChange={(value) => {
              formik.setFieldValue("warehouse", value);
            }}
            onBlur={formik.handleBlur}
            disabled={isDisabled}
            required={true}
            placeholder="Select Warehouse"
          />

          {formik?.errors?.itemType && formik?.touched?.itemType ? (
            <MasterErrorText message={formik?.errors?.itemType} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-4">
        <MasterInput
            label="Location"
            name="location"
            type="text"
            required={true}
            value={formik.values?.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Location"
            disabled={isDisabled}
          />
          {formik.errors?.location && formik.touched.location && (
            <MasterErrorText message={formik.errors.location} />
          )}
        </div>
        {!isDisabled && (
          <div className="col-md-12 mt-3 text-left">
            <FormikSaveButton formik={formik} />
            <FormikResetButton
              className="ml-2"
              formik={formik}
              formikData={formData}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default WarehouseLocationForm;
