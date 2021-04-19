import React from "react";

function MasterErrorText(props) {
  return (
    <span
      className='text-danger'
      style={{
        fontSize: ".8rem",
        fontWeight: "600",
      }}
    >
      {props.message}
    </span>
  );
}

export default MasterErrorText;
