import * as Yup from "yup";

export const initialValues = {
  subCategory: "",
  itemType: "",
  itemCategory: "",
};

export const formsValidationSchema = Yup.object().shape({
  subCategory: Yup.string().required("Sub Category is required"),
  itemCategory: Yup.object().shape({
    value: Yup.string().required("Category is required"),
  }),
  itemType: Yup.object().shape({
    value: Yup.string().required("Item Type is required"),
  }),
});

export const tableConfig = {
  headers: [
    {
      key: "sl",
      label: "SL",
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

    // {
    //   key: "businessUnitId",
    //   label: "Business Unit",
    // },
  ],
  isSearchable: true,
};

export const itemSubCategoryViewUpdatePayloadData = (values) => {
  const payload = {
    accountId: values?.accountId,
    actionBy: values?.actionBy,
    sl: values?.sl,
    itemType: {
      value: values?.itemTypeId,
      label: values?.itemTypeName,
    },
    itemCategory: {
      value: values?.itemCategoryId,
      label: values?.itemCategoryName,
    },
    subCategory: values?.itemSubCategoryName,
    itemSubCategoryId: values?.itemSubCategoryId,
  };
  return payload;
};
