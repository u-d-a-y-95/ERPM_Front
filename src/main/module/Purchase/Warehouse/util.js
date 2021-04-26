import * as Yup from "yup";

export const initialValues = {
  businessUnit: "",
  warehouseName: "",
  warehouseCode: "",
  warehouseAddress: "",
};

export const formValidationSchema = Yup.object().shape({
  businessUnit: Yup.object().shape({
    value: Yup.string().required("Business Unit is required"),
  }),
  warehouseName: Yup.string().required("Warehouse Name is Required"),
  warehouseCode: Yup.string().required("Warehouse Code is Required"),
  warehouseAddress: Yup.string().required("Address is Required"),
});

export const tableConfig = {
  headers: [
    {
      key: "sl",
      label: "SL",
    },
    {
      key: "warehouseCode",
      label: "Code",
    },
    {
      key: "warehouseName",
      label: "Warehouse",
    },
    {
      key: "warehouseAddress",
      label: "Address",
    },
    {
      key: "businessUnit",
      label: "Business Unit",
    },
  ],
  isSearchable: true,
};

export const warehouseViewUpdatePayloadData = (values) => {
  const payload = {
    businessUnit: {
      value: values?.businessUnit,
      label: values?.customerTypeName,
    },
    warehouseName: values?.warehouseName,
    warehouseCode: values?.warehouseCode,
    warehouseAddress: values?.warehouseAddress,
  };
  return payload;
};
