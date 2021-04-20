import * as Yup from "yup";

export const formsInitialValues = {
  code: "",
  itemName: "",
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
      key: "code",
      label: "Code",
    },
    {
      key: "itemName",
      label: "Item",
    },
    {
      key: "itemType",
      label: "Item Type",
    },
    {
      key: "category",
      label: "Category",
    },
    {
      key: "subCategory",
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
  code: Yup.string().required("Required"),
  itemName: Yup.string().required("Required"),
//   partNumber: Yup.string().required('Required'),
  itemType: Yup.object().shape({
    value: Yup.string().required("UoM is required"),
  }),
  subCategory: Yup.object().shape({
    value: Yup.string().required("UoM is required"),
  }),
  category: Yup.object().shape({
    value: Yup.string().required("UoM is required"),
  }),
  uom: Yup.object().shape({
    value: Yup.string().required("UoM is required"),
  }),
});

// export const purchaseObject = values => {
//     values['branchId'] = "1"
//     return values;
// }
