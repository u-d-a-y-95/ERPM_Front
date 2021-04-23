import * as Yup from "yup"

export const formsInitialValues = {
    businessUnit: "",
    subCategory : "",
    itemType: "",
    category: "",
}


export const tableConfig = {
    headers: [
        {
            key: "sl", label : 'SL'
        },
        {
            key: "subCategory", label: "Sub-Category"
        },
        {
            key: "itemType", label: "Item Type"
        },
        {
            key: "category", label: "Category"
        },
        {
            key: "businessUnit", label: "Business Unit"
        },
    ],
    isSearchable: true
}


export const formsValidationSchema = Yup.object().shape({
    subCategory: Yup.object().shape({
        value: Yup.string().required("Sub Category is required"),
      }),
    category: Yup.object().shape({
        value: Yup.string().required("Category is required"),
      }),
    itemType: Yup.object().shape({
      value: Yup.string().required("Item Type is required"),
    }),
    businessUnit: Yup.object().shape({
      value: Yup.string().required("Business Uint is required"),
    }),
  });
