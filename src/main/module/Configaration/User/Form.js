import React, { useEffect, useState } from "react";
import MasterInput from "../../../common/base-component/master-input";
import MasterErrorText from "../../../common/base-component/master-errortext";
import FormikResetButton from "../../../common/composite-component/formik-reset-button";

import { useFormik } from "formik";
import { formsInitialValues, formsValidationSchema } from "./util";

import MasterSelect from "../../../common/base-component/master-select";
import FormikSaveButton from "./../../../common/composite-component/formik-save-button";
import { getUserDropdownListAction, createUser } from './http';

const UserForm = ({
  updateFormData,
  populateTable,
  isDisabled,
  setUpdateFormData,
  accountId,
  businessUnitId,
}) => {
  const [userDropdownList, setUserDropdownList] = useState([]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: updateFormData || formsInitialValues,
    // initialValues: formsInitialValues,
    validationSchema: formsValidationSchema,
    onSubmit: (values) => {
    //   if (updateFormData?.itemCode) {
    //     return updateUser(
    //       values,
    //       formik,
    //       populateTable,
    //       setUpdateFormData
    //     );
    //   }
      return createUser(
        values,
        formik,
        populateTable,
        setUpdateFormData
      );
    },
  });

  useEffect(() => {
    getUserDropdownListAction(setUserDropdownList);

  }, []);

  const isSupperUser = [
    {
      value: 1,
      label: "FALSE",
    },
    {
      value: 2,
      label: "TRUE",
    },
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
        <MasterSelect
            label="User Type"
            name="userType"
            data={userDropdownList}
            value={formik.values?.userType}
            onChange={(value) => {
              formik.setFieldValue("userType", value);
            }}
            onBlur={formik.handleBlur}
            disabled={isDisabled}
            required={true}
            placeholder="Select User Type"
          />

          {formik?.errors?.userType && formik?.touched?.userType ? (
            <MasterErrorText message={formik?.errors?.userType} />
          ) : null}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterInput
            label="User Name"
            name="userName"
            type="text"
            required={true}
            value={formik.values?.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter User Name"
            disabled={isDisabled}
          />
          {formik.errors?.userName && formik.touched.userName && (
            <MasterErrorText message={formik.errors.userName} />
          )}
        </div>
        <div className="col-md-4 col-lg-3">
        <MasterInput
            label="User/Login Id"
            name="loginId"
            type="text"
            required={true}
            value={formik.values?.loginId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter User/Log Id"
            disabled={isDisabled}
          />
          {formik.errors?.loginId && formik.touched.loginId && (
            <MasterErrorText message={formik.errors.loginId} />
          )}
        </div>
        <div className="col-md-4 col-lg-3">
          <MasterSelect
            label="Is Super User"
            name="isSuperUser"
            data={isSupperUser}
            // data={categotyDDL}
            value={formik.values?.isSuperUser}
            onChange={(value) => {
              formik.setFieldValue("isSuperUser", value);             
            }}
            onBlur={formik.handleBlur}
            required={true}
            placeholder="Select User Status"
          />

          {formik?.errors?.isSuperUser && formik?.touched?.isSuperUser ? (
            <MasterErrorText message={formik?.errors?.isSuperUser} />
          ) : null}
        </div>

        <div className="col-md-12 mt-3 text-left">
          <FormikSaveButton formik={formik} />
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

export default UserForm;
