import React, { useEffect, useState } from "react";
import MasterInput from "../../../../common/base-component/master-input";
import MasterErrorText from "../../../../common/base-component/master-errortext";
import FormikResetButton from "../../../../common/composite-component/formik-reset-button";
import FormikSaveButton from "../../../../common/composite-component/formik-save-button";

import { useFormik } from "formik";
import {
  formsValidationSchema,
} from "./util";

import { getItemTypeDropdownListAction } from "./http";
import MasterSelect from "../../../../common/base-component/master-select";

const ItemCategoryForm = ({
  formData,
  isDisabled,
  submitBtnClick,
}) => {

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
    </>
  );
};

export default ItemCategoryForm;
