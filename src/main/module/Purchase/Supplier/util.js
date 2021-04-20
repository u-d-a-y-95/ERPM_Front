import * as Yup from "yup";

export const initialValues = {
  supplierType: "",
  supplierName: "",
  contactNumber: "",
  supplierAddress: "",
  nid: "",
  bin: "",
  licenseNo: "",
};

export const formValidationSchema = Yup.object().shape({
  supplierType: Yup.object().shape({
    value: Yup.string().required("Supplier Type is required"),
  }),
  supplierName: Yup.string().required("Supplier Name is Required"),
  contactNumber: Yup.string().required("Contact Number is required"),
  supplierAddress: Yup.string().required("Address is Required"),
  nid: Yup.string().required("Nid is Required"),
  licenseNo: Yup.string().required("Licence Number is Required"),
});

export const tableConfig = {
  headers: [
    {
      key: "sl",
      label: "SL",
    },
    {
      key: "code",
      label: "Code",
    },
    {
      key: "supplierName",
      label: "Supplier Name",
    },
    {
      key: "address",
      label: "Address",
    },
    {
      key: "contactNumber",
      label: "Contact No",
    },
    {
      key: "nid",
      label: "NID",
    },
    {
      key: "bin",
      label: "BIN",
    },
    {
      key: "licenceNumber",
      label: "Licence Number",
    },
  ],
  isSearchable: true,
};
