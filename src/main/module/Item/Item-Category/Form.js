import React, { useEffect, useState } from "react";
import MasterInput from "../../../common/base-component/master-input";
import MasterErrorText from "../../../common/base-component/master-errortext";
import FormikResetButton from "../../../common/composite-component/formik-reset-button";
import FormikSaveButton from "../../../common/composite-component/formik-save-button";

import { useFormik } from "formik";
import {
  formsInitialValues,
  formsValidationSchema,
  // purchaseObject,
} from "./util";

import { createItemCategory } from "./http";
import MasterSelect from "../../../common/base-component/master-select";

function ItemCategoryForm(props) {
    const [businessUnitDDL, setBusinessUnitDDL] = useState([]);
    const [itemTypeDDL, setitemTypeDDL] = useState([]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: props.upDate || formsInitialValues,
    validationSchema: formsValidationSchema,
    onSubmit: (values) => {
      createItemCategory(values, formik, props.populateTable);
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
            label="Category"
            name="category"
            type="text"
            required={true}
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Category Name"
          />
          {formik.errors?.category && formik.touched.category && (
            <MasterErrorText message={formik.errors.category} />
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

export default ItemCategoryForm;
