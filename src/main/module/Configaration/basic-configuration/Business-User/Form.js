import React, { useEffect, useState } from "react";
import MasterInput from "../../../../common/base-component/master-input";
import MasterErrorText from "../../../../common/base-component/master-errortext";
import FormikResetButton from "../../../../common/composite-component/formik-reset-button";
import FormikSaveButton from "../../../../common/composite-component/formik-save-button";

import { useFormik } from "formik";
import { formsValidationSchema } from "./util";

import { getBusinessUintDropdownListAction } from "./http";
import MasterSelect from "../../../../common/base-component/master-select";

const BusinessUserForm = ({ formData, isDisabled, submitBtnClick, userCurrentInfo, setLoading }) => {
  const [userDropdownList, setUserDropdownList] = useState([]);
  const [businessUnitDropdownList, setBusinessUnitDropdownList] = useState([]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formData,
    validationSchema: formsValidationSchema,
    onSubmit: (values) => {
      // console.log(values)
      submitBtnClick(values, formik);
    },
  });

  useEffect(() => {
    getBusinessUintDropdownListAction(
      setBusinessUnitDropdownList,
      setLoading,
      userCurrentInfo
    );
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <MasterSelect
            label="User"
            name="user"
            data={userDropdownList}
            value={formik?.values?.user}
            onChange={(value) => {
              formik.setFieldValue("user", value);
            }}
            onBlur={formik.handleBlur}
            disabled={isDisabled}
            required={true}
            placeholder="Select User"
          />
        </div>
        <div className="col-md-4 col-lg-4">
          <MasterSelect
            label="Business Uint"
            name="businessUnit"
            data={businessUnitDropdownList}
            value={formik?.values?.businessUnit}
            onChange={(value) => {
              formik.setFieldValue("businessUnit", value);
            }}
            onBlur={formik.handleBlur}
            disabled={isDisabled}
            required={true}
            placeholder="Select Business Uint"
          />
        </div>
        <div className="col-12 mt-5"></div>
        {!isDisabled && (
          <div className="col-md-12 mt-3 text-right">
            <FormikSaveButton id={formData?.businessUnit} formik={formik} />
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

export default BusinessUserForm;
