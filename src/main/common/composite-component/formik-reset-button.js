import React from "react";
import MasterButton from "../base-component/master-button";

function FormikResetButton(props) {
  return (
    <>
      <MasterButton
        label='Reset'
        className={`${props.className} + btn btn-warning text-white`}
        onClick={() => {
          // props.formikData(null)
          props.formik.resetForm(props.formikData);
        }}
        style={{
          width: "150px",
          height: "35px",
        }}
      />
    </>
  );
}

export default FormikResetButton;
