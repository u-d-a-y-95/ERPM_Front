import * as Yup from "yup";

export const initialValues = {
  businessUnit: "",
  subCategory: "",
  itemType: "",
  category: "",
};

export const tableConfig = {
  headers: [
    {
      key: "sl",
      label: "SL",
    },
    {
      key: "itemSubCategoryName",
      label: "Sub-Category",
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
      key: "businessUnitId",
      label: "Business Unit",
    },
  ],
  isSearchable: true,
};

export const formsValidationSchema = Yup.object().shape({
  subCategory: Yup.string().required("Sub Category is required"),
  category: Yup.object().shape({
    value: Yup.string().required("Category is required"),
  }),
  itemType: Yup.object().shape({
    value: Yup.string().required("Item Type is required"),
  }),
  businessUnit: Yup.string().required("Business Uint is required"),
});


export const itemProfileViewUpdatePayloadData = (value) => {
    console.log(value)
    const payload = {
      businessUnit: value?.businessUnitId,
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
      sl: value?.sl,
  
    };
    return payload;
  };
  