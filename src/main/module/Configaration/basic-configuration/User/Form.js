/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import MasterInput from "../../../../common/base-component/master-input";
import MasterErrorText from "../../../../common/base-component/master-errortext";

import { useFormik } from "formik";
import { formsValidationSchema, AddUsertableConfig } from "./util";

import MasterSelect from "../../../../common/base-component/master-select";
import { getUserDropdownList, createUser, getUserAvailable } from "./http";
import MasterButton from "../../../../common/base-component/master-button";
import SimpleMasterTable from "../../../../common/composite-component/simple-master-list";
import { toast } from "react-toastify";

const UserForm = ({
  formData,
  setUpdateFormData,
  isDisabled,
  submitBtnClick,
  setLoading,
}) => {
  const [userDropdownList, setUserDropdownList] = useState([]);
  const [userList, setDataToUserList] = useState([]);
  const [isAvailable, setAvailable] = useState(false);
  console.log(isAvailable);
  const formik = useFormik({
    enableReinitialize: false,
    initialValues: formData,
    validationSchema: formsValidationSchema,
    onSubmit: (values) => {
      setDataToUserList((prevState) => {
        const obj = {
          sl: prevState.length + 1,
          isSuperUser: values.isSuperUser ? "Yes" : "No",
          loginId: values.loginId,
          userName: values.userName,
          userType: values.userType.label,
          createdDate: values?.createdDate,
        };

        const singleData = userList?.find(
          (user) => user.loginId === values?.loginId
        );
        if (singleData) {
          toast.warn("User already added");
          return prevState;
        }

        return [...prevState, obj];
      });
    },
  });
  useEffect(() => {
    if (formik?.values?.loginId) {
      getUserAvailable(formik?.values?.loginId, setLoading, setAvailable);
    }
  }, [formik?.values?.loginId]);
  useEffect(() => {
    getUserDropdownList(setUserDropdownList, setLoading);
  }, []);

  const config = AddUsertableConfig;
  config.data = userList;
  config.action = [
    {
      icon: "fa fa-trash",
      className: "btn btn-sm btn-primary text-white",
      event: deleteFromTable,
    },
  ];

  function deleteFromTable(row) {
    const users = userList.filter((item) => item != row);
    const newUsers = users?.map((user) => ({
      sl: users?.length,
      isSuperUser: user?.isSuperUser,
      loginId: user?.loginId,
      userName: user?.userName,
      userType: user?.userType.label,
      createdDate: user?.createdDate,
    }));
    setDataToUserList(newUsers);
  }

  return (
    <>
      <div className='row'>
        <div className='col-md-4 col-lg-4'>
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
        <div className='col-md-4 col-lg-4'>
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
        <div className='col-md-4 col-lg-4'>
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
          {!isAvailable && <MasterErrorText message='User is already exist' />}
        </div>
        <div className='col-md-4 col-lg-4 mt-4'>
          <input
            className='form-control'
            type='date'
            name='createdDate'
            id='createdDate'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik?.values?.createdDate}
          />
          {/* {formik.errors?.loginId && formik.touched.loginId && (
            <MasterErrorText message={formik.errors.loginId} />
          )} */}
        </div>
        <div className='col-md-3 col-lg-2 d-flex align-items-center'>
          <div className='mt-4 d-flex align-items-center'>
            <label
              for='isSuperUser'
              className='m-0 text-bold'
              style={{
                fontWeight: "500",
              }}
            >
              Is Super User
            </label>
            <input
              style={{
                width: "20px",
                height: "20px",
              }}
              className='ml-2'
              type='checkbox'
              id='isSuperUser'
              name='isSuperUser'
              value={formik.values.isSuperUser}
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              checked={formik.values.isSuperUser == true}
            />
          </div>
        </div>
        <div className='col-lg-1 d-flex align-items-center'>
          <MasterButton
            label='add'
            className='btn btn-sm btn-info mt-4'
            onClick={formik.submitForm}
            disabled={!formik.isValid || !formik.dirty || !isAvailable}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <SimpleMasterTable config={config} />
        </div>
        <div className='row'>
          <div className='col-md-12 mt-3 text-right'>
            <MasterButton
              label='Submit'
              className='btn btn-sm btn-info mt-4'
              onClick={formik.submitForm}
              disabled={!formik.isValid || !formik.dirty}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
