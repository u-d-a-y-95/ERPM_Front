import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { formsValidationSchema } from "./util";
import { getUserDropdownListAction } from "./http";
import MasterErrorText from "../../../../common/base-component/master-errortext";
import MasterInput from "../../../../common/base-component/master-input";
import MasterSelect from "../../../../common/base-component/master-select";
import FormikSaveButton from "../../../../common/composite-component/formik-save-button";
import FormikResetButton from "../../../../common/composite-component/formik-reset-button";
import MasterCheckBox from "../../../../common/base-component/master-checkbox";

const UserForm = ({
  updateFormData,
  setUpdateFormData,
  isDisabled,
  submitBtnClick,
  setLoading,
}) => {
  const [userDropdownList, setUserDropdownList] = useState([]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: updateFormData,
    validationSchema: formsValidationSchema,
    onSubmit: (values) => {
      submitBtnClick(values, formik);
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
      <div className='row'>
        <div className='col-md-4 col-lg-3'>
          <MasterSelect
            label='User Type'
            name='userType'
            data={userDropdownList}
            value={formik.values?.userType}
            onChange={(value) => {
              formik.setFieldValue("userType", value);
            }}
            onBlur={formik.handleBlur}
            disabled={isDisabled}
            required={true}
            placeholder='Select User Type'
          />

          {formik?.errors?.userType && formik?.touched?.userType ? (
            <MasterErrorText message={formik?.errors?.userType} />
          ) : null}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            label='User Name'
            name='userName'
            type='text'
            required={true}
            value={formik.values?.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Enter User Name'
            disabled={isDisabled}
          />
          {formik.errors?.userName && formik.touched.userName && (
            <MasterErrorText message={formik.errors.userName} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            label='User/Login Id'
            name='loginId'
            type='text'
            required={true}
            value={formik.values?.loginId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Enter User/Log Id'
            disabled={isDisabled}
          />
          {formik.errors?.loginId && formik.touched.loginId && (
            <MasterErrorText message={formik.errors.loginId} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>{/* <MasterCheckBox /> */}</div>

        <div className='col-md-12 mt-3 text-left'>
          <FormikSaveButton formik={formik} />
          <FormikResetButton
            className='ml-2'
            formik={formik}
            formikData={setUpdateFormData}
          />
        </div>
      </div>
    </>
  );
};

export default UserForm;
