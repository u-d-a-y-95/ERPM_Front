import * as Yup from "yup";

export const formsInitialValues = {
  userName: "",
  userType: "",
  loginId: "",
  isSuperUser: "",
};

export const tableConfig = {
  headers: [
    {
      key: "sl",
      label: "SL",
    },
    {
      key: "userId",
      label: "User Id",
    },
    {
      key: "userName",
      label: "User Name",
    },
    {
      key: "loginId",
      label: "Login Id",
    },
    {
      key: "isSupperId",
      label: "Is Supper User?",
    },
    {
      key: "createdBy",
      label: "Created By",
    },
    {
      key: "createdDate",
      label: "Created Date",
    },
    {
      key: "",
      label: "Actions",
    },
  ],
  isSearchable: true,
};

export const formsValidationSchema = Yup.object().shape({
  userName: Yup.string().required("User Name is Required"),
  loginId: Yup.string().required("Login Id is Required"),
  userType: Yup.object().shape({
    value: Yup.string().required("Item Type is required"),
  }),
  isSuperUser: Yup.object().shape({
    value: Yup.string().required("User Status is required"),
  }),
});

export const tableFormExportValues = { userType: "", status: "" };

export const tableFormValidationSchema = Yup.object().shape({
  userType: Yup.object().shape({
    value: Yup.string().required("User Type is required"),
  }),
  status: Yup.object().shape({
    value: Yup.string().required("Status is required"),
  }),
});

export const itemProfileViewUpdatePayloadData = (value) => {
  console.log(value);
  const payload = {
    accountId: 1,
    itemName: value?.itemName,
    // partNumber: value?.partNumber,
    // uom: value?.uom,
    category: {
      value: value?.itemCategoryId,
      label: value?.itemCategoryName,
    },
    subCategory: {
      value: value?.itemSubCategoryId,
      label: value?.itemSubCategoryName,
    },
    itemType: {
      value: value?.itemTypeId,
      label: value?.itemTypeName,
    },
    itemCode: value?.itemCode,
    sl: value?.sl,
  };
  return payload;
};
