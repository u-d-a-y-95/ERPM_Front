import React from "react";
import MasterLabel from "./master-label";

function MasterCheckBox(props) {
  return (
    <>
      <MasterLabel {...props} />
      <div onChange={props.onChange} onBlur={props.onBlur} value={props.value}>
        {props.data.map((item, index) => {
          const id = item.value + new Date().getTime().toString();
          return (
            <div
              className={
                props.display == "inline"
                  ? `form-check form-check-inline mr-3`
                  : `form-check mr-3`
              }
              key={index}
            >
              <input
                className="form-check-input"
                type="checkbox"
                name={props.name}
                id={id}
                value={item.value}
                onChange={props.onChange}
                checked={props.value.includes(item.value)}
              />
              <label className="form-check-label" htmlFor={id}>
                {item.label}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MasterCheckBox;
