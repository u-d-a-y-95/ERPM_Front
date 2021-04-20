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
  category: Yup.string().required("Item Category Required!"),
  itemType: Yup.object().shape({
<<<<<<< HEAD
    value: Yup.number().required("Item Type is required"),
=======
    value: Yup.string().required("UoM is required"),
>>>>>>> 8a0fc9b (Item Page Design And Api Binding)
  }),
  businessUnit: Yup.object().shape({
    value: Yup.string().required("UoM is required"),
  }),
});
