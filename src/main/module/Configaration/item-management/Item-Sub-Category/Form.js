import React, { useEffect, useState } from "react";
import MasterInput from "../../../../common/base-component/master-input";
import MasterErrorText from "../../../../common/base-component/master-errortext";
import FormikResetButton from "../../../../common/composite-component/formik-reset-button";
import FormikSaveButton from "../../../../common/composite-component/formik-save-button";

import { useFormik } from "formik";
import { formsValidationSchema } from "./util";

import { getItemTypeDropdownList, getItemCategoryDropdownList } from "./http";
import MasterSelect from "../../../../common/base-component/master-select";

function ItemSubCategoryForm({
  updateFormData,
  isDisabled,
  submitBtnClick,
  userCurrentInfo,
  setLoading,
}) {
  const [itemTypeDropdownList, setItemTypeDropdownList] = useState([]);
  const [itemCategoryDropdownList, setItemCategoryDropdownList] = useState([]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: updateFormData,
    validationSchema: formsValidationSchema,
    onSubmit: (values) => {
      submitBtnClick(values, formik);
    },
  });

  useEffect(() => {
    getItemTypeDropdownList(setItemTypeDropdownList, setLoading);
    formik.setValues(updateFormData);
  }, []);

  useEffect(() => {
    if (formik?.values?.itemType?.value) {
      getItemCategoryDropdownList(
        setItemCategoryDropdownList,
        setLoading,
        userCurrentInfo,
        formik?.values?.itemType?.value
      );
    }
  }, [formik?.values?.itemType?.value]);

  return (
    <>
      <div className='row'>
        <div className='col-md-4 col-lg-4'>
          <MasterSelect
            label='Item Type'
            name='itemType'
            data={itemTypeDropdownList}
            value={formik.values?.itemType}
            onChange={(value) => {
              formik.setFieldValue("itemType", value);
              getItemCategoryDropdownList(
                setItemCategoryDropdownList,
                setLoading,
                userCurrentInfo,
                value?.value
              );
            }}
            onBlur={formik.handleBlur}
            disabled={isDisabled}
            required={true}
            placeholder='Select Item Type'
          />
        </div>
        <div className='col-md-4 col-lg-4'>
          <MasterSelect
            label='Category'
            name='itemCategory'
            data={itemCategoryDropdownList}
            value={formik.values?.itemCategory}
            onChange={(value) => {
              formik.setFieldValue("itemCategory", value);
            }}
            onBlur={formik.handleBlur}
            disabled={!formik?.values?.itemType || isDisabled}
            required={true}
            placeholder='Select Item itemCategory'
          />
        </div>
        <div className='col-md-4 col-lg-4'>
          <MasterInput
            label='Sub-Category'
            name='subCategory'
            type='text'
            required={true}
            value={formik.values?.subCategory}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Enter Sub Category'
            disabled={!formik?.values?.itemCategory || isDisabled}
          />
          {formik.errors?.subCategory && formik.touched.subCategory && (
            <MasterErrorText message={formik.errors.subCategory} />
          )}
        </div>
        <div className='col-12 mt-5'></div>
        {!isDisabled && (
          <div className='col-md-12 mt-3 text-right'>
            <FormikSaveButton
              id={updateFormData?.itemSubCategoryId}
              formik={formik}
            />
            <FormikResetButton
              className='ml-2'
              formik={formik}
              formikData={updateFormData}
            />
          </div>
        )}
        <div className='col-12 mb-3'></div>
      </div>
    </>
  );
}

export default ItemSubCategoryForm;
