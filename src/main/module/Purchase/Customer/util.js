import * as Yup from "yup";

export const initialValues = {
  customerType: "",
  customerName: "",
  customerAddress: "",
  customerEmail: "",
  billingName: "",
  billingAddress: "",
  contactNumber: "",
  nid: "",
  bin: "",
  licenceNumber: "",
};

export const formValidationSchema = Yup.object().shape({
  customerType: Yup.object().shape({
    value: Yup.string().required("Supplier Type is required"),
  }),
  customerName: Yup.string().required("Name is Required"),
  customerAddress: Yup.string().required("Address is Required"),
  billingName: Yup.string().required("Billing Name is Required"),
  billingAddress: Yup.string().required("Billing Address is Required"),
  contactNumber: Yup.string().required("Contact Number is required"),
  nid: Yup.string().required("Nid is Required"),
  licenceNumber: Yup.string().required("Licence Number is Required"),
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
      key: "customer",
      label: "Customer",
    },
    {
      key: "customerType",
      label: "Customer Type",
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
