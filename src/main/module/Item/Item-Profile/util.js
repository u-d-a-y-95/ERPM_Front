import * as Yup from "yup";

export const formsInitialValues = {
  itemName: "",
  itemCode: "",
  itemType: "",
  category: "",
  subCategory: "",
  uom: "",
  partNumber: "",
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
  itemCode: Yup.string().required("Item Code is Required"),
  itemName: Yup.string().required("Item Name isRequired"),
//   partNumber: Yup.string().required('Required'),
  itemType: Yup.object().shape({
    value: Yup.string().required("Item Type is required"),
  }),
  subCategory: Yup.object().shape({
    value: Yup.string().required("Item Sub Category is required"),
  }),
  category: Yup.object().shape({
    value: Yup.string().required("Item Category is required"),
  }),
  uom: Yup.object().shape({
    value: Yup.string().required("UoM is required"),
  }),
});

export const itemProfileViewUpdatePayloadData = (value) => {
  console.log(value)
  const payload = {
    accountId: 1,
    itemName: value?.itemName,
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

