import * as Yup from "yup";

export const initialValues = {
  businessUnitName: "",
  businessUnitCode: "",
  businessUnitAddress: "",
};

export const formValidationSchema = Yup.object().shape({
  businessUnitName: Yup.string().required("Business Unit is required"),
  businessUnitCode: Yup.string().required("Code is required"),
  businessUnitAddress: Yup.string().required("Address is required"),
});

export const tableConfig = {
  headers: [
    {
      key: "sl",
      label: "SL",
    },
    {
      key: "strBusinessUnitName",
      label: "Business Unit",
    },
    {
      key: "strBusinessUnitCode",
      label: "Code",
    },
    {
      key: "strBusinessUnitAddress",
      label: "Address",
    },
  ],
  isSearchable: true,
};
