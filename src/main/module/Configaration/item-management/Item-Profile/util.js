import * as Yup from "yup";

export const initialValues = {
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
export const businessUnitTable = {
  height: 200,
  headers: [
    {
      key: "sl",
      label: "SL",
    },

    {
      key: "businessUnitName",
      label: "Business Unit Name",
    },
    {
      key: "action",
      label: "Action",
    },
  ],
};

export const formValidationSchema = Yup.object().shape({
  itemCode: Yup.string().required("Item Code is Required"),
  itemName: Yup.string().required("Item Name isRequired"),
  partNumber: Yup.string().required('Part Number Required'),
  itemType: Yup.object().shape({
    value: Yup.string().required("Item Type is required"),
  }),
  // subCategory: Yup.object().shape({
  //   value: Yup.string().required("Item Sub Category is required"),
  // }),
  category: Yup.object().shape({
    value: Yup.string().required("Item Category is required"),
  }),
  uom: Yup.object().shape({
    value: Yup.string().required("UoM is required"),
  }),
});

export const itemProfileViewUpdatePayloadData = (values) => {

  const payload = {
    sl: values?.sl,
    partNumber: values?.partNumber,
    itemName: values?.itemName,
    itemCode: values?.itemCode,
    itemId: values?.itemId,
    itemType: {
      value: values?.itemTypeId,
      label: values?.itemTypeName,
    },
    category: {
      value: values?.itemCategoryId,
      label: values?.itemCategoryName,
    },
    subCategory: {
      value: values?.itemSubCategoryId,
      label: values?.itemSubCategoryName,
    },
    uom: {
      value: values?.uomId,
      label: values?.uomName
    }
  }

  return payload;
};

// const payload = {
//   itemName: value?.itemName,
//   partNumber: value?.partNumber,
//   uom: {
//     value: value?.uomId,
//     label: value?.uomName,
//   },
//   category: {
//     value: value?.itemCategoryId,
//     label: value?.itemCategoryName,
//   },
//   subCategory: {
//     value: value?.itemSubCategoryId,
//     label: value?.itemSubCategoryName,
//   },
//   itemType: {
//     value: value?.itemTypeId,
//     label: value?.itemTypeName,
//   },
//   itemCode: value?.itemCode,
//   sl: value?.sl,

// };