import React from "react";
import MasterLabel from "./master-label";
import Select from "react-select";

function MasterSelect(props) {
  return (
    <>
      <MasterLabel {...props} />
      <Select
        {...props}
        name={props.name}
        options={props.data || []}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        isDisabled={props.disabled}
      />

      {/* <select
        onChange={onSelectChange}
        onBlur={props.onBlur}
        value={JSON.stringify(props.value)}
        id={props.name}
        name={props.name}
      >
        <option hidden disabled />
        {props.data.map((item, index) => {
          return <option value={JSON.stringify(item)}>{item.label}</option>;
        })}
      </select> */}
    </>
  );
}

export default MasterSelect;
