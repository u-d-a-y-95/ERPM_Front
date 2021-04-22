import React, { useEffect, useState } from "react";
import MasterInput from "../../../common/base-component/master-input";
import MasterErrorText from "../../../common/base-component/master-errortext";
import FormikResetButton from "../../../common/composite-component/formik-reset-button";

import { useFormik } from "formik";
import { formsInitialValues, formsValidationSchema } from "./util";

import {
  createItemProfile,
  getItemCategoryDropdownListAction,
  getItemSubCategoryDropdownListAction,
  getItemTypeDropdownListAction,
  updateItemProfile,
  getUomDropdownListAction,
} from "./http";
import MasterSelect from "../../../common/base-component/master-select";
import FormikSaveButton from "./../../../common/composite-component/formik-save-button";

const ItemProfileForm = ({
  updateFormData,
  populateTable,
  isDisabled,
  setUpdateFormData,
  accountId,
  businessUnitId,
}) => {

  
  console.log(updateFormData);

  const [itemTypeDropdownList, setitemTypeDropdownList] = useState([]);
  const [itemCategoryDropdownList, setItemCategoryDropdownList] = useState([]);
  const [itemSubCategoryDropdownList, setitemSubCategoryDropdownList] = useState([]);
  const [uomDropdownList, setUomDropdownList] = useState([]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: updateFormData || formsInitialValues,
    // initialValues: formsInitialValues,
    // validationSchema: formsValidationSchema,
    onSubmit: (values) => {
      if (updateFormData?.itemCode) {
        return updateItemProfile(values, formik, populateTable, setUpdateFormData);
      }
      return createItemProfile(values, formik, populateTable, setUpdateFormData);
      // console.log(formik.values.itemName)
    },

  });

  useEffect(() => {
    getItemTypeDropdownListAction(setitemTypeDropdownList);
    getItemCategoryDropdownListAction(
      accountId,
      businessUnitId,
      setItemCategoryDropdownList
    );
    getItemSubCategoryDropdownListAction(
      accountId,
      businessUnitId,
      setitemSubCategoryDropdownList
    );
    getUomDropdownListAction(setUomDropdownList);

    // // console.log("currentRowId", currentRowId);
    // if (currentRowId) {
    //   getItemByIdActions(currentRowId, setSingleData, setDisabled);
    // }
  }, []);

  const categotyDDL = [
    { value: 1, label: "Bangladesh" },
    { value: 2, label: "India" },
    { value: 3, label: "China" },
    { value: 4, label: "Pakistan" },
    { value: 5, label: "Iran" },
    { value: 6, label: "Srilanka" },
  ];

  return (
    <>
      {/* {updateFromData ? (
        <h3>Edit Item Basic Information</h3>
      ) : (
        <h3>Create Item Basic Information</h3>
      )} */}
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
            disabled={isDisabled}
          />
          {formik.errors?.itemName && formik.touched.itemName && (
            <MasterErrorText message={formik.errors.itemName} />
          )}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterInput
            label="Code"
            name="itemCode"
            type="text"
            required={true}
            value={formik.values?.itemCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Item Code"
            disabled={isDisabled}
          />
          {formik.errors?.itemCode && formik.touched.itemCode && (
            <MasterErrorText message={formik.errors.itemCode} />
          )}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterSelect
            label="Item Type"
            name="itemType"
            data={itemTypeDropdownList}
            value={formik.values?.itemType}
            onChange={(value) => {
              formik.setFieldValue("itemType", value);
            }}
            onBlur={formik.handleBlur}
            disabled={isDisabled}
            required={true}
            placeholder="Select Item Type"
          />

          {formik?.errors?.itemType &&
          formik?.touched?.itemType ? (
            <MasterErrorText message={formik?.errors?.itemType} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-3">         
          <MasterSelect
            label="Category"
            name="category"
            // data={itemCategoryDropdownList}
            data={categotyDDL}
            value={formik.values?.category}
            onChange={(value) => {
              formik.setFieldValue("category", value);
            }}
            onBlur={formik.handleBlur}
            disabled={isDisabled}
            required={true}
            placeholder="Select Item Category"
          />

          {formik?.errors?.category &&
          formik?.touched?.category ? (
            <MasterErrorText message={formik?.errors?.category} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterSelect
            label="Sub-Category"
            name="subCategory"
            // data={itemSubCategoryDropdownList}
            data={categotyDDL}
            value={formik.values?.subCategory}
            onChange={(value) => {
              formik.setFieldValue("subCategory", value);
            }}
            onBlur={formik.handleBlur}
            disabled={isDisabled}
            required={true}
            placeholder="Item Sub-Category"
          />

          {formik?.errors?.subCategory &&
          formik?.touched?.subCategory ? (
            <MasterErrorText message={formik?.errors?.subCategory} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterSelect
            label="UOM"
            name="uom"
            data={uomDropdownList}
            value={formik.values?.uom}
            onChange={(value) => {
              formik.setFieldValue("uom", value);
            }}
            onBlur={formik.handleBlur}
            disabled={isDisabled}
            required={true}
            placeholder="Select Item UOM"
          />

          {formik?.errors?.uom && formik?.touched?.uom ? (
            <MasterErrorText message={formik?.errors?.uom} />
          ) : null}
        </div>

        {updateFormData.length > 0 && (
          <div className="col-md-4 col-lg-3">
            <MasterInput
              label="Part Number"
              name="partNumber"
              type="text"
              required={true}
              value={formik.values?.partNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Part Number"
              disabled={isDisabled}
            />
            {formik.errors?.partNumber && formik.touched.partNumber && (
              <MasterErrorText message={formik.errors.partNumber} />
            )}
          </div>
        )}

        <div className="col-md-12 mt-3 text-left">
          <FormikSaveButton id={updateFormData?.itemCode} formik={formik} />
          <FormikResetButton
            className="ml-2"
            formik={formik}
            formikData={setUpdateFormData}
          />
        </div>
      </div>
    </>
  );
};

export default ItemProfileForm;
