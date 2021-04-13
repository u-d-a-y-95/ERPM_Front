import React from "react";
import MasterLabel from "./master-label";

function MasterTextArea(props) {
  return (
    <>
      <MasterLabel {...props} />
      <textarea
        name={props.name}
        type={props.type}
        className="form-control"
        id={props.name}
        placeholder={props.placeHolder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        disabled={props.disabled}
        readOnly={props.readOnly}
        rows="1"
      />
    </>
  );
}

export default MasterTextArea;
