import * as Yup from "yup";

export const initialValues = {
  supplierType: "",
  supplierName: "",
  contactNumber: "",
  supplierAddress: "",
  email: "",
  nid: "",
  bin: "",
  licenseNo: "",
};

export const formValidationSchema = Yup.object().shape({
  supplierType: Yup.object().shape({
    value: Yup.string().required("Supplier Type is required"),
  }),
  supplierName: Yup.string().required("Supplier Name is Required"),
  contactNumber: Yup.string()
    .required("Mobile no is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(11, "Must be exactly 11 digits")
    .max(11, "Must be exactly 11 digits"),
  supplierAddress: Yup.string().required("Address is Required"),
  email: Yup.string().email("Provide valid email").required("Required"),
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
      key: "supplierAddress",
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

export const supplierViewUpdatePayloadData = (values) => {
  const payload = {
    accountId: values?.accountId,
    actionBy: values?.userId,
    bin: values?.bin,
    businessUnitId: values?.businessUnitId,
    contactNumber: values?.contactNumber,
    email: values?.email,
    licenseNo: values?.licenseNo,
    nid: values?.nid,
    sl: values?.sl,
    supplierAddress: values?.supplierAddress,
    supplierCode: values?.supplierCode,
    supplierId: values?.supplierId,
    supplierName: values?.supplierName,
    supplierType: {
      value: values?.supplierTypeId,
      label: values?.supplierTypeName,
    },
  };
  return payload;
};
