import React from "react";

function MasterLabel(props) {
  return (
    <>
      <label htmlFor={props.name} className="form-label font-weight-bold mb-0 mt-2">
        {props.label} 
      </label>
    </>
  );
}

export default MasterLabel;
