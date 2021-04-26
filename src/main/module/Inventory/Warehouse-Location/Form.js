import React, { useEffect, useState } from "react";
import MasterInput from "../../../common/base-component/master-input";
import MasterErrorText from "../../../common/base-component/master-errortext";
import FormikResetButton from "../../../common/composite-component/formik-reset-button";

import { useFormik } from "formik";

import {
  createItemProfile,
  getItemCategoryDropdownListAction,
  getItemSubCategoryDropdownListAction,
  getItemTypeDropdownListAction,
  updateItemProfile,
  getUomDropdownListAction,
} from "./http";
import MasterSelect from "../../../common/base-component/master-select";
import FormikSaveButton from "../../../common/composite-component/formik-save-button";
import { formValidationSchema } from './util';

const ItemProfileForm = ({
  formData,
  isDisabled,
  submitBtnClick,
  accountId,
  businessUnitId,
}) => {
  const [itemTypeDropdownList, setitemTypeDropdownList] = useState([]);
  const [itemCategoryDropdownList, setItemCategoryDropdownList] = useState([]);
  const [uomDropdownList, setUomDropdownList] = useState([]);
  const [
    itemSubCategoryDropdownList,
    setItemSubCategoryDropdownList,
  ] = useState([]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formData,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      submitBtnClick(values, formik);
    },
  });

  useEffect(() => {
    getItemTypeDropdownListAction(setitemTypeDropdownList);
    getUomDropdownListAction(setUomDropdownList);
  }, []);

  return (
    <>
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

          {formik?.errors?.itemType && formik?.touched?.itemType ? (
            <MasterErrorText message={formik?.errors?.itemType} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterSelect
            label="Category"
            name="category"
            data={itemCategoryDropdownList}
            value={formik.values?.category}
            onChange={(value) => {
              formik.setFieldValue("category", value);
              getItemSubCategoryDropdownListAction(
                accountId,
                businessUnitId,
                value?.value,
                setItemSubCategoryDropdownList
              );
            }}
            onBlur={formik.handleBlur}
            disabled={!formik?.values?.itemType || isDisabled}
            required={true}
            placeholder="Select Item Category"
          />

          {formik?.errors?.category && formik?.touched?.category ? (
            <MasterErrorText message={formik?.errors?.category} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterSelect
            label="Sub-Category"
            name="subCategory"
            data={itemSubCategoryDropdownList}
            value={formik.values?.subCategory}
            onChange={(value) => {
              formik.setFieldValue("subCategory", value);
            }}
            onBlur={formik.handleBlur}
            disabled={!formik?.values?.category || isDisabled}
            required={true}
            placeholder="Item Sub-Category"
          />

          {formik?.errors?.subCategory && formik?.touched?.subCategory ? (
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

export default ItemProfileForm;
