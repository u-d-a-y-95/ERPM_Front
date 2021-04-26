import React, { useEffect, useState } from "react";
import MasterInput from "../../../../common/base-component/master-input";
import MasterErrorText from "../../../../common/base-component/master-errortext";
import FormikResetButton from "../../../../common/composite-component/formik-reset-button";
import FormikSaveButton from "../../../../common/composite-component/formik-save-button";

import { useFormik } from "formik";
import { formsValidationSchema } from "./util";

import {
  createItemSubCategory,
  getItemTypeDropdownListAction,
  getItemCategoryDropdownListAction,
  getItemSubCategoryDropdownListAction,
} from "./http";
import MasterSelect from "../../../../common/base-component/master-select";

function ItemSubCategoryForm({
  formData,
  isDisabled,
  submitBtnClick,
  accountId,
  businessUnitId,
}) {
  // const [businessUnitDropdownList, setBusinessUnitDropdownList] = useState([]);
  const [itemTypeDropdownList, setitemTypeDropdownList] = useState([]);
  const [itemCategoryDropdownList, setItemCategoryDropdownList] = useState([]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formData,
    validationSchema: formsValidationSchema,
    onSubmit: (values) => {
      console.log(values)
      submitBtnClick(values, formik);
    },
  });

  useEffect(() => {
    getItemTypeDropdownListAction(setitemTypeDropdownList);
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
            disabled={isDisabled}
          />
          {formik.errors?.businessUnit && formik.touched.businessUnit && (
            <MasterErrorText message={formik.errors.businessUnit} />
          )}
        </div>
        <div className="col-md-4 col-lg-4">
          <MasterInput
            label="Sub-Category"
            name="subCategory"
            type="text"
            required={true}
            value={formik.values?.subCategory}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Sub Category"
            disabled={isDisabled}
          />
          {formik.errors?.subCategory && formik.touched.subCategory && (
            <MasterErrorText message={formik.errors.subCategory} />
          )}
        </div>
        <div className="col-md-4 col-lg-4">
          <MasterSelect
            label="Item Type"
            name="itemType"
            data={itemTypeDropdownList}
            value={formik.values?.itemType}
            onChange={(value) => {
              console.log(value);
              formik.setFieldValue("itemType", value);
              getItemCategoryDropdownListAction(
                accountId,
                businessUnitId,
                value?.value,
                setItemCategoryDropdownList
              );
            }}
            onBlur={formik.handleBlur}
            disabled={isDisabled}
            required={true}
            placeholder="Select Item Type"
          />
        </div>
        <div className="col-md-4 col-lg-4">
          <MasterSelect
            label="Category"
            name="category"
            data={itemCategoryDropdownList}
            value={formik.values?.category}
            onChange={(value) => {
              formik.setFieldValue("category", value);
            }}
            onBlur={formik.handleBlur}
            disabled={isDisabled}
            required={true}
            placeholder="Select Item Category"
          />
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
}

export default ItemSubCategoryForm;
