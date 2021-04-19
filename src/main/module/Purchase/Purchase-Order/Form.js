import React, { useEffect } from "react";
import MasterInput from "../../../common/base-component/master-input";
import MasterErrorText from "../../../common/base-component/master-errortext";
import FormikResetButton from "../../../common/composite-component/formik-reset-button";
import FormikSaveButton from "../../../common/composite-component/formik-save-button";

import { useFormik } from "formik";
import {
  formsInitialValues,
  formsValidationSchema,
  purchaseObject,
} from "./util";

import { createPurchaseOrder } from "./http";

function PurchaseOrderForm(props) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: props.upDate || formsInitialValues,
    validationSchema: formsValidationSchema,
    onSubmit: (values) => {
      const obj = purchaseObject(values);
      createPurchaseOrder(obj, formik, props.populateTable);
    },
  });

  return (
    <>
      <div className='row'>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            label='Id'
            name='id'
            type='text'
            required={true}
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors?.id && formik.touched.id && (
            <MasterErrorText message={formik.errors.id} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            label='Title'
            name='title'
            type='text'
            required={true}
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors?.title && formik.touched.title && (
            <MasterErrorText message={formik.errors.title} />
          )}
        </div>
        <div className='col-md-4 col-lg-3'>
          <MasterInput
            label='Description'
            name='description'
            type='text'
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className='col-md-12 mt-3 text-left'>
          <FormikSaveButton className='' formik={formik} />
          <FormikResetButton
            className='ml-2'
            formik={formik}
            formikData={props.setUpData}
          />
        </div>
      </div>
    </>
  );
}

export default PurchaseOrderForm;
