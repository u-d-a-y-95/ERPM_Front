import React, { useEffect, useState } from "react";
import MasterInput from "../../../../common/base-component/master-input";
import MasterErrorText from "../../../../common/base-component/master-errortext";
import FormikResetButton from "../../../../common/composite-component/formik-reset-button";
import { useFormik } from "formik";
import {
  getItemCategoryDropdownList,
  getItemSubCategoryDropdownList,
  getItemTypeDropdownList,
  getUomDropdownList,
  getBusinessDropDownList
} from "./http";
import MasterSelect from "../../../../common/base-component/master-select";
import FormikSaveButton from "../../../../common/composite-component/formik-save-button";
import { formValidationSchema, businessUnitTable } from './util';
import SimpleMasterTable from "../../../../common/composite-component/simple-master-list";
import MasterButton from "../../../../common/base-component/master-button";
import { useSelector } from "react-redux";

const ItemProfileForm = ({
  formData,
  isDisabled,
  submitBtnClick,
  userCurrentInfo,
}) => {
  const [itemTypeDropdownList, setitemTypeDropdownList] = useState([]);
  const [itemCategoryDropdownList, setItemCategoryDropdownList] = useState([]);
  const [uomDropdownList, setUomDropdownList] = useState([]);
  const [itemSubCategoryDropdownList, setItemSubCategoryDropdownList] = useState([]);
  const [businessUnitList, setBusinessUnitList] = useState([])
  const [addbusinessUnitList, setAddBusinessUnitList] = useState([])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formData.itemConfig,
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      const obj = {
        itemConfig: values,
        businessUnitList: addbusinessUnitList
      }
      submitBtnClick(obj, formik);
    },
  });

  useEffect(() => {
    getItemTypeDropdownList(setitemTypeDropdownList);
    getUomDropdownList(setUomDropdownList);
    getBusinessDropDownList(userCurrentInfo, setBusinessUnitList)
  }, []);

  useEffect(() => {
    if (formik?.values?.itemType?.value) {
      getItemCategoryDropdownList(
        userCurrentInfo,
        formik?.values?.itemType?.value,
        setItemCategoryDropdownList
      );
    }
  }, [formik?.values?.itemType?.value]);
  useEffect(() => {
    setAddBusinessUnitList(formData.businessUnitList)
  }, [formData.businessUnitList]);

  useEffect(() => {
    if (formik?.values?.category?.value) {
      getItemSubCategoryDropdownList(
        userCurrentInfo,
        formik?.values?.category?.value,
        setItemSubCategoryDropdownList
      );
    }
  }, [formik?.values?.category?.value]);

  const config = businessUnitTable;
  config.data = addbusinessUnitList;
  config.action = !isDisabled && [
    {
      icon: "fa fa-trash",
      className: "btn btn-sm btn-primary text-white",
      event: deleteFromtable,
    },
  ] || []

  function deleteFromtable(row) {
    const businessUnits = addbusinessUnitList.filter(item => item != row)
    setAddBusinessUnitList(businessUnits)
  }
  function addBusinessUnit(row) {
    setAddBusinessUnitList(prevState => {
      const obj = {
        sl: addbusinessUnitList.length + 1,
        businessUnitName: formik.values.businessUnit.label,
        businessUnitId: formik.values.businessUnit.value,
      }
      if (prevState.find(item => item.businessUnitId == obj.businessUnitId)) {
        return prevState
      }
      return [...prevState, obj]

    })
  }

  return (
    <>
      <div className="row">
        <div className="col-md-4 col-lg-4">
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
        <div className="col-md-4 col-lg-4">
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
        <div className="col-md-4 col-lg-4">
          <MasterSelect
            label="Item Type"
            name="itemType"
            data={itemTypeDropdownList}
            value={formik?.values?.itemType}
            onChange={(value) => {
              formik.setFieldValue("itemType", value);
              getItemCategoryDropdownList(
                userCurrentInfo,
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
        <div className="col-md-4 col-lg-4">
          <MasterSelect
            label="Category"
            name="category"
            data={itemCategoryDropdownList}
            value={formik?.values?.category}
            onChange={(value) => {
              if (!value) {
                formik.setFieldValue("category", null);
                return setItemSubCategoryDropdownList([])
              }
              formik.setFieldValue("category", value);
              getItemSubCategoryDropdownList(
                userCurrentInfo,
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
        <div className="col-md-4 col-lg-4">
          <MasterSelect
            label="Sub-Category"
            name="subCategory"
            data={itemSubCategoryDropdownList}
            value={formik?.values?.subCategory}
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
        <div className="col-md-4 col-lg-4">
          <MasterSelect
            label="UOM"
            name="uom"
            data={uomDropdownList}
            value={formik?.values?.uom}
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
        <div className="col-md-4 col-lg-4">
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
        <div className="col-md-4 col-lg-4 d-flex align-items-center">
          <div className="w-90">
            <MasterSelect
              label="Business Unit"
              name="businessUnit"
              data={businessUnitList}
              value={formik?.values?.businessUnit}
              onChange={(value) => {
                if (!value) {
                  return formik.setFieldValue("businessUnit", null);
                }
                formik.setFieldValue("businessUnit", value);
              }}
              onBlur={formik.handleBlur}
              required={true}
              placeholder="Select Business Unit"
              disabled={isDisabled}
            />

            {formik?.errors?.businessUnit && formik?.touched?.businessUnit ? (
              <MasterErrorText message={formik?.errors?.businessUnit} />
            ) : null}
          </div>
          <div className="w-10 mt-4 ml-2 text-right">
            <MasterButton
              icon="fa fa-plus"
              label="Add"
              className="btn btn-sm btn-info"
              onClick={addBusinessUnit}
              disabled={isDisabled}
            />
          </div>

        </div>
        <div className="col-md-12">
          <SimpleMasterTable config={config} />
        </div>
        <div className="col-12 mt-5"></div>
        {!isDisabled && (
          <div className="col-md-12 mt-3 text-right">
            <FormikSaveButton id={formData?.itemCode} formik={formik} />
            <FormikResetButton
              className="ml-2"
              formik={formik}
              formikData={formData}
            />
          </div>
        )}
        <div className="col-12 mb-3"></div>
      </div>
      <div className="row">

      </div>
    </>
  );
};

export default ItemProfileForm;
