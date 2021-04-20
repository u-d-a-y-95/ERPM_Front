import React, { useEffect, useState } from "react";
import MasterInput from "../../../common/base-component/master-input";
import MasterErrorText from "../../../common/base-component/master-errortext";
import FormikResetButton from "../../../common/composite-component/formik-reset-button";
import FormikSaveButton from "../../../common/composite-component/formik-save-button";

import { useFormik } from "formik";
import {
  formsInitialValues,
  formsValidationSchema,
} from "./util";

import { createItemSubCategory } from "./http";
import MasterSelect from "../../../common/base-component/master-select";

function ItemSubCategoryForm(props) {
    const [businessUnitDDL, setBusinessUnitDDL] = useState([]);
    const [itemTypeDDL, setitemTypeDDL] = useState([]);
    const [categoryDDL, setCategoryDDL] = useState([]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: props.upDate || formsInitialValues,
    validationSchema: formsValidationSchema,
    onSubmit: (values) => {
      createItemSubCategory(values, formik, props.populateTable);
    },
  });

  const testDDL = [
    { value: 1, label: "Test" },
    { value: 2, label: "Test2" },
    { value: 3, label: "Test3" },
    { value: 4, label: "Test4" },
    { value: 5, label: "Test5" },
  ]

  return (
    <>
      <div className="row">
        
        <div className="col-md-4 col-lg-3">
          <MasterSelect
            label="Business Unit"
            name="businessUnit"
            // data={businessUnitDDL}
            data={testDDL}
            value={formik.values.businessUnit}
            onChange={(value) => {
              formik.setFieldValue("businessUnit", value);
            }}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterInput
            label="Sub-Category"
            name="subCategory"
            type="text"
            required={true}
            value={formik.values.subCategory}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Sub Category"
          />
          {formik.errors?.subCategory && formik.touched.subCategory && (
            <MasterErrorText message={formik.errors.subCategory} />
          )}
        </div>
        <div className="col-md-4 col-lg-3">
        <MasterSelect
            label="Item Type"
            name="itemType"
            // data={itemTypeDDL}
            data={testDDL}
            value={formik.values.itemType}
            onChange={(value) => {
              formik.setFieldValue("itemType", value);
            }}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="col-md-4 col-lg-3">
        <MasterSelect
            label="Category"
            name="category"
            // data={categoryDDL}
            data={testDDL}
            value={formik.values.category}
            onChange={(value) => {
              formik.setFieldValue("category", value);
            }}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="col-md-12 mt-3 text-left">
          <FormikSaveButton formik={formik} />
          <FormikResetButton
            className="ml-2"
            formik={formik}
            formikData={props.setUpData}
          />
        </div>
      </div>
    </>
  );
}

export default ItemSubCategoryForm;
