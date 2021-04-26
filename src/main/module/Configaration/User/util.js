import * as Yup from "yup";

export const formsInitialValues = {
  businessUnit: "",
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
      key: "itemCode",
      label: "Code",
    },
    {
      key: "itemName",
      label: "Item",
    },
    {
      key: "itemTypeName",
      label: "Item Type",
    },
    {
      key: "itemCategoryName",
      label: "Category",
    },
    {
      key: "itemSubCategoryName",
      label: "Sub-Category",
    },
    {
      key: "status",
      label: "Status",
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


