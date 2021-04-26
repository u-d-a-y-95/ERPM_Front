import React, { useEffect, useState } from "react";
import MasterInput from "../../../../common/base-component/master-input";
import MasterErrorText from "../../../../common/base-component/master-errortext";
import FormikResetButton from "../../../../common/composite-component/formik-reset-button";
import FormikSaveButton from "../../../../common/composite-component/formik-save-button";

import { useFormik } from "formik";
import {
  formsInitialValues,
  formsValidationSchema,
  // purchaseObject,
} from "./util";

import { createItemCategory, getItemTypeDropdownListAction } from "./http";
import MasterSelect from "../../../../common/base-component/master-select";

const ItemCategoryForm = ({
  formData,
  isDisabled,
  submitBtnClick,
  accountId,
  businessUnitId,
}) => {
  // const [businessUnitDDL, setBusinessUnitDDL] = useState([]);
  const [itemTypeDropdownList, setItemTypeDropdownList] = useState([]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formData,
    validationSchema: formsValidationSchema,
    onSubmit: (values) => {
      submitBtnClick(values, formik);
    },
  });

  useEffect(() => {
    getItemTypeDropdownListAction(setItemTypeDropdownList);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <MasterInput
            label="Business Unit"
            name="businessUnit"
            type="text"
            required={true}
            value={formik.values?.businessUnit}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Business Unit"
            isDisabled={isDisabled}
          />
          {formik.errors?.businessUnit && formik.touched.businessUnit && (
            <MasterErrorText message={formik.errors.businessUnit} />
          )}
        </div>
        <div className="col-md-4 col-lg-4">
          <MasterInput
            label="Item Category"
            name="category"
            type="text"
            required={true}
            value={formik.values?.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Category"
            isDisabled={isDisabled}
          />
          {formik.errors?.category && formik.touched.category && (
            <MasterErrorText message={formik.errors.category} />
          )}
        </div>
        <div className="col-md-4 col-lg-4">
          <MasterSelect
            label="Item Type"
            name="itemType"
            data={itemTypeDropdownList}
            value={formik.values?.itemType}
            onChange={(value) => {
              formik.setFieldValue("itemType", value);
            }}
            onBlur={formik.handleBlur}
            isDisabled={isDisabled}
            required={true}
            placeholder="Select Item Type"
          />
        </div>
        {!isDisabled && (
          <div className="col-md-12 mt-3 text-left">
            <FormikSaveButton id={formData?.itemCode} formik={formik} />
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

export default ItemCategoryForm;
