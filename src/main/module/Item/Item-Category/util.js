import * as Yup from "yup";

export const initialValues = {
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
      key: "itemCategoryName",
      label: "Category",
    },
    {
      key: "itemTypeName",
      label: "Item Type",
    },

    {
      key: "businessUnitId",
      label: "Business Unit",
    },
    // {
    //   key: "status",
    //   label: "Status",
    // },
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
