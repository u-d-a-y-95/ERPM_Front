import * as Yup from "yup";

export const formsInitialValues = {
  businessUnit: "",
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
      key: "category",
      label: "Category",
    },
    {
      key: "itemType",
      label: "Item Type",
    },

    {
      key: "businessUnit",
      label: "Business Unit",
    },
  ],
  isSearchable: true,
};

export const formsValidationSchema = Yup.object().shape({
  category:  Yup.string().required("Item Type is required"),
  itemType: Yup.object().shape({
    value: Yup.string().required("Item Type is required"),
  }),
  businessUnit: Yup.string().required("Business Unit is required"),
  
});
