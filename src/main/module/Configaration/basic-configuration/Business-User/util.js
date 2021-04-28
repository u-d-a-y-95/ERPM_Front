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


export const itemCategoryViewUpdatePayloadData = (value) => {
  console.log(value)
  const payload = {
    accountId: value?.accountId,
    actionBy: value?.actionBy,
    sl: value?.sl,
    itemType: {
      value : value?.itemTypeId,
      label : value?.itemTypeName
    },   
    category: {
      value: value?.itemCategoryId,
      label: value?.itemCategoryName,
    },   
  };
  return payload;
};
