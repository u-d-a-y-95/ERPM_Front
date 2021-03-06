import * as Yup from "yup";

export const initialValues = {
  category: "",
  itemType: "",
};

export const tableConfig = {
  headers: [
    {
      key: "sl",
      label: "SL",
    },
    {
      key: "itemCategoryName",
      label: "Category",
    },
    {
      key: "itemTypeName",
      label: "Item Type",
    },
  ],
  isSearchable: true,
};

export const formsValidationSchema = Yup.object().shape({
  category: Yup.string().required("Item Category is required"),
  itemType: Yup.object().shape({
    value: Yup.string().required("Item Type is required"),
  }),
});


export const itemCategoryViewUpdatePayloadData = (values) => {
  const payload = {
    accountId: values?.accountId,
    actionBy: values?.actionBy,
    sl: values?.sl,
    itemType: {
      value : values?.itemTypeId,
      label : values?.itemTypeName
    },   
    category: values?.itemCategoryName,
    itemCategoryId: values?.itemCategoryId,  
  };
  return payload;
};
