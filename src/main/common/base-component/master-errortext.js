import React from "react";

function MasterErrorText(props) {
  return (
    <span className="text-danger font-weight-bold errortext-fontSize">
      {" "}
      {props.message}
    </span>
  );
}

export default MasterErrorText;
