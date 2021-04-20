import React, { useEffect, useState } from "react";
import MasterInput from "../../../common/base-component/master-input";
import MasterErrorText from "../../../common/base-component/master-errortext";
import FormikResetButton from "../../../common/composite-component/formik-reset-button";

import { useFormik } from "formik";
import { formsInitialValues, formsValidationSchema } from "./util";

import { createItemProfile, getItemCategoryDropdownListAction, getItemSubCategoryDropdownListAction, getItemTypeDropdownListAction, updateItemProfile, getUomDropdownListAction } from "./http";
import MasterSelect from "../../../common/base-component/master-select";
import FormikSaveButton from "./../../../common/composite-component/formik-save-button";

function ItemProfileForm(props) {
  // console.log(props)
  // const [codeDDL, setCodeDDL] = useState([]);
  const {accountId, businessId} = props;
  // console.log(props)

  const [itemTypeDropdownList, setitemTypeDropdownList] = useState([]);
  const [itemCategoryDropdownList, setItemCategoryDropdownList] = useState([]);
  const [itemSubCategoryDropdownList, setitemSubCategoryDropdownList] = useState([]);
  const [uomDropdownList, setUomDropdownList] = useState([]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: props.updateFromData || formsInitialValues,
    validationSchema: formsValidationSchema,
    onSubmit: (values) => {
      // console.log(values);
      if (props.updateFromData) {
        updateItemProfile(values, formik, props.populateTable);
      }
      createItemProfile(values, formik, props.populateTable);
    },
  });

  useEffect(() => {
    getItemTypeDropdownListAction(setitemTypeDropdownList);
    getItemCategoryDropdownListAction(accountId, businessId, setItemCategoryDropdownList);
    getItemSubCategoryDropdownListAction(accountId, businessId, setitemSubCategoryDropdownList);
    getUomDropdownListAction(setUomDropdownList);
    // getItemTypeDDLActions(setItemTypeDDL);
    // // console.log("currentRowId", currentRowId);
    // if (currentRowId) {
    //   getItemByIdActions(currentRowId, setSingleData, setDisabled);
    // }
  }, []);

  // const itemTypeDDL = [
  //   { value: 1, label: "Bangladesh" },
  //   { value: 2, label: "India" },
  //   { value: 3, label: "China" },
  // ];
  // const categotyDDL = [
  //   { value: 1, label: "Bangladesh" },
  //   { value: 2, label: "India" },
  //   { value: 3, label: "China" },
  // ];
  // const subCategoryDDL = [
  //   { value: 1, label: "Bangladesh" },
  //   { value: 2, label: "India" },
  //   { value: 3, label: "China" },
  // ];
  // const uomDDL = [
  //   { value: 1, label: "Bangladesh" },
  //   { value: 2, label: "India" },
  //   { value: 3, label: "China" },
  // ];

  return (
    <>
      {props.updateFromData ? (
        <h3>Edit Item Basic Information</h3>
      ) : (
        <h3>Create Item Basic Information</h3>
      )}
      <div className="row">
        <div className="col-md-4 col-lg-3">
          <MasterInput
            label="Item Name"
            name="itemName"
            type="text"
            required={true}
            value={formik.values?.itemName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Item Name"
            disabled={props.isDisabled}
          />
          {formik.errors?.itemName && formik.touched.itemName && (
            <MasterErrorText message={formik.errors.itemName} />
          )}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterInput
            label="Code"
            name="code"
            type="text"
            required={true}
            value={formik.values?.code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Code"
            disabled={props.isDisabled}
          />
          {formik.errors?.code && formik.touched.code && (
            <MasterErrorText message={formik.errors.code} />
          )}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterSelect
            label="Item Type"
            name="itemType"
            data={itemTypeDropdownList}
            value={formik.values.itemType}
            onChange={(value) => {
              formik.setFieldValue("itemType", value);
            }}
            onBlur={formik.handleBlur}
            disabled={props.isDisabled}
          />

          {formik?.errors?.itemType?.label &&
          formik?.touched?.itemType?.label ? (
            <MasterErrorText message={formik?.errors?.itemType?.label} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterSelect
            label="Category"
            name="category"
            data={itemCategoryDropdownList}
            value={formik.values.category}
            onChange={(value) => {
              formik.setFieldValue("category", value);
            }}
            onBlur={formik.handleBlur}
            disabled={props.isDisabled}
          />

          {formik?.errors?.category?.label &&
          formik?.touched?.category?.label ? (
            <MasterErrorText message={formik?.errors?.category?.label} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterSelect
            label="Sub-Category"
            name="subCategory"
            data={itemSubCategoryDropdownList}
            value={formik.values.subCategory}
            onChange={(value) => {
              formik.setFieldValue("subCategory", value);
            }}
            onBlur={formik.handleBlur}
            disabled={props.isDisabled}
          />

          {formik?.errors?.subCategory?.label &&
          formik?.touched?.subCategory?.label ? (
            <MasterErrorText message={formik?.errors?.subCategory?.label} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterSelect
            label="UOM"
            name="uom"
            data={uomDropdownList}
            value={formik.values.uom}
            onChange={(value) => {
              formik.setFieldValue("uom", value);
            }}
            onBlur={formik.handleBlur}
            disabled={props.isDisabled}
          />

          {formik?.errors?.uom?.label && formik?.touched?.uom?.label ? (
            <MasterErrorText message={formik?.errors?.uom?.label} />
          ) : null}
        </div>

        {props.updateFromData.length > 0 && (
          <div className="col-md-4 col-lg-3">
            <MasterInput
              label="Part Number"
              name="partNumber"
              type="text"
              required={true}
              value={formik.values.partNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Part Number"
              disabled={props.isDisabled}
            />
            {formik.errors?.partNumber && formik.touched.partNumber && (
              <MasterErrorText message={formik.errors.partNumber} />
            )}
          </div>
        )}

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

export default ItemProfileForm;
