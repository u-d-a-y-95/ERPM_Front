import React, { useEffect, useState } from "react";
import MasterInput from "../../../common/base-component/master-input";
import MasterErrorText from "../../../common/base-component/master-errortext";
import FormikResetButton from "../../../common/composite-component/formik-reset-button";
import FormikSaveButton from "../../../common/composite-component/formik-save-button";

import { useFormik } from "formik";
import {
  formsInitialValues,
  formsValidationSchema,
  purchaseObject,
} from "./util";

import { createItemProfile } from "./http";
import MasterSelect from "../../../common/base-component/master-select";

function ItemProfileForm(props) {
    const [codeDDL, setCodeDDL] = useState([]);
    const [itemTypeDDL, setitemTypeDDL] = useState([]);
    const [categotyDDL, setCategotyDDL] = useState([]);
    const [subCategoryDDL, setSubCategoryDDL] = useState([]);
    const [uomDDL, setUomDDL] = useState([]);


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: props.upDate || formsInitialValues,
    validationSchema: formsValidationSchema,
    onSubmit: (values) => {
      const obj = purchaseObject(values);
      createItemProfile(obj, formik, props.populateTable);
    },
  });

  return (
    <>
      <div className="row">
        <div className="col-md-4 col-lg-3">
          <MasterInput
            label="Item Name"
            name="itemName"
            type="text"
            required={true}
            value={formik.values.itemName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors?.itemName && formik.touched.itemName && (
            <MasterErrorText message={formik.errors.itemName} />
          )}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterSelect
            label="Code"
            name="code"
            data={codeDDL}
            value={formik.values.code}
            onChange={(value) => {
              formik.setFieldValue("code", value);
            }}
            onBlur={formik.handleBlur}
          />

          {formik?.errors?.code?.label && formik?.touched?.code?.label ? (
            <MasterErrorText message={formik?.errors?.code?.label} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-3">
        <MasterSelect
            label="Item Type"
            name="itemType"
            data={itemTypeDDL}
            value={formik.values.itemType}
            onChange={(value) => {
              formik.setFieldValue("itemType", value);
            }}
            onBlur={formik.handleBlur}
          />

          {formik?.errors?.itemType?.label && formik?.touched?.itemType?.label ? (
            <MasterErrorText message={formik?.errors?.itemType?.label} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-3">
        <MasterSelect
            label="Category"
            name="category"
            data={categotyDDL}
            value={formik.values.category}
            onChange={(value) => {
              formik.setFieldValue("category", value);
            }}
            onBlur={formik.handleBlur}
          />

          {formik?.errors?.category?.label && formik?.touched?.category?.label ? (
            <MasterErrorText message={formik?.errors?.category?.label} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-3">
        <MasterSelect
            label="Sub-Category"
            name="subCategory"
            data={subCategoryDDL}
            value={formik.values.subCategory}
            onChange={(value) => {
              formik.setFieldValue("subCategory", value);
            }}
            onBlur={formik.handleBlur}
          />

          {formik?.errors?.subCategory?.label && formik?.touched?.subCategory?.label ? (
            <MasterErrorText message={formik?.errors?.subCategory?.label} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-3">
        <MasterSelect
            label="UOM"
            name="uom"
            data={uomDDL}
            value={formik.values.uom}
            onChange={(value) => {
              formik.setFieldValue("uom", value);
            }}
            onBlur={formik.handleBlur}
          />

          {formik?.errors?.uom?.label && formik?.touched?.uom?.label ? (
            <MasterErrorText message={formik?.errors?.uom?.label} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterInput
            label="Part Number"
            name="partNumber"
            type="text"
            required={true}
            value={formik.values.partNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors?.partNumber && formik.touched.partNumber && (
            <MasterErrorText message={formik.errors.partNumber} />
          )}
        </div>
        <div className="col-md-12 mt-3 text-left">
          <FormikSaveButton className="" formik={formik} />
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

export default ItemProfileForm;
