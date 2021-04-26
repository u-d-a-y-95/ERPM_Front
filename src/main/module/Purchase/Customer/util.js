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
  licenseNo: "",
};

export const formValidationSchema = Yup.object().shape({
  customerType: Yup.object().shape({
    value: Yup.string().required("Supplier Type is required"),
  }),
  customerName: Yup.string().required("Name is Required"),
  customerAddress: Yup.string().required("Address is Required"),
  billingName: Yup.string().required("Billing Name is Required"),
  billingAddress: Yup.string().required("Billing Address is Required"),
  contactNumber: Yup.string()
    .required("Mobile no is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(11, "Must be exactly 11 digits")
    .max(11, "Must be exactly 11 digits"),
  customerEmail: Yup.string().email("Provide valid email address"),
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
      key: "customerCode",
      label: "Code",
    },
    {
      key: "customerName",
      label: "Customer",
    },
    {
      key: "customerTypeName",
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
      key: "licenseNo",
      label: "Licence Number",
    },
  ],
  isSearchable: true,
};

export const customerViewUpdatePayloadData = (value) => {
  const payload = {
    accountId: 1,
    address: value?.address,
    billingAddress: value?.billingAddress,
    billingName: value?.billingName,
    bin: value?.bin,
    businessUnitId: value?.businessUnitId,
    contactNumber: value?.contactNumber,
    customerAddress: value?.customerAddress,
    customerCode: value?.customerCode,
    customerEmail: value?.customerEmail,
    customerId: value?.customerId,
    customerName: value?.customerName,
    customerType: {
      value: value?.customerTypeId,
      label: value?.customerTypeName,
    },
    licenseNo: value?.licenseNo,
    nid: value?.nid,
    sl: value?.sl,
  };
  return payload;
};
