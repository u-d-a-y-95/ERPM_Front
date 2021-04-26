/* eslint-disable no-dupe-keys */
import React from "react";

function MasterLabel(props) {
  return (
    <>
      <label
        htmlFor={props.name}
        className='form-label mb-0 mt-2'
        style={{
          textAlign: "left",
          fontSize: "14px",
          color: "#525252",
          fontWeight: "600",
          textTransform: "capitalize",
        }}
      >
        {props.label}
        {
          props.required && <span className="text-danger">*</span>
        }
      </label>
    </>
  );
}

export default MasterLabel;
