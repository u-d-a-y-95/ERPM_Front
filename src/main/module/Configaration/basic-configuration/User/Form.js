import React, { useEffect, useState } from "react";
import MasterInput from "../../../../common/base-component/master-input";
import MasterCheckBox from "../../../../common/base-component/master-checkbox";
import MasterErrorText from "../../../../common/base-component/master-errortext";
import FormikResetButton from "../../../../common/composite-component/formik-reset-button";

import { useFormik } from "formik";
import { formsValidationSchema, AddUsertableConfig } from "./util";

import MasterSelect from "../../../../common/base-component/master-select";
import FormikSaveButton from "../../../../common/composite-component/formik-save-button";
import { getUserDropdownListAction, createUser } from './http';
import MasterButton from "../../../../common/base-component/master-button";
import SimpleMasterTable from "../../../../common/composite-component/simple-master-list";

const UserForm = ({
  formData,
  setUpdateFormData,
  isDisabled,
  submitBtnClick,
  setLoading,
}) => {
  const [userDropdownList, setUserDropdownList] = useState([]);
  const [userList, setDataToUserList] = useState([])

  const formik = useFormik({
    enableReinitialize: false,
    initialValues: formData,
    validationSchema: formsValidationSchema,
    onSubmit: (values) => {
      console.log(values)
      setDataToUserList(prevState => {
        const obj = {
          sl: prevState.length + 1,
          isSuperUser: values.isSuperUser ? "Yes" : "No",
          loginId: values.loginId,
          userName: values.userName,
          userType: values.userType.label,
        }
        return [...prevState, obj]

      })
    },
  });

  useEffect(() => {
    getUserDropdownListAction(setUserDropdownList);
  }, []);

  const config = AddUsertableConfig;
  config.data = userList;
  config.action = [
    {
      icon: "fa fa-trash",
      className: "btn btn-sm btn-primary text-white",
      event: deleteFromtable,
    },
  ];

  function deleteFromtable(row) {
    const users = userList.filter(item => item != row)
    setDataToUserList(users)
  }

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
        <div className='col-md-3 col-lg-2 d-flex align-items-center'>
          <div className="mt-4 d-flex align-items-center">
            <label
              for="isSuperUser"
              className="m-0 text-bold"
              style={{
                fontWeight: "500",
              }}

            > Is Super User</label>
            <input
              style={{
                width: "20px",
                height: "20px",
              }}
              className="ml-2"
              type="checkbox"
              id="isSuperUser"
              name="isSuperUser"
              value={formik.values.isSuperUser}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              checked={formik.values.isSuperUser == true}
            />
          </div>

        </div>
        <div className="col-lg-1 d-flex align-items-center">
          <MasterButton
            label="add"
            className="btn btn-sm btn-info mt-4"
            onClick={formik.submitForm}
            disabled={!formik.isValid || !formik.dirty}
          />
        </div>

      </div >
      <div className="row">
        <div className="col-md-12">
          <SimpleMasterTable config={config} />
        </div>
        {/* <div className='col-md-12 mt-3 text-right'>
          <FormikSaveButton formik={formik} />
          <FormikResetButton
            className='ml-2'
            formik={formik}
            formikData={setUpdateFormData}
          />
        </div> */}
      </div>


    </>
  );
};

export default UserForm;
