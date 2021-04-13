import React, { useEffect } from "react";
import MasterLabel from "./master-label";

function MasterInput(props) {
  return (
    <>
      <MasterLabel {...props} />
      <input
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
      />
    </>
  );
}

export default MasterInput;
