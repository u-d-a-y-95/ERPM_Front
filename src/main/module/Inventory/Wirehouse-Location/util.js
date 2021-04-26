import * as Yup from "yup";

export const initialValues = {
  warehouse: "",
  businessUnit: "",
  location: "",
};

export const tableConfig = {
  headers: [
    {
      key: "sl",
      label: "SL",
    },
    {
      key: "location",
      label: "Location",
    },
    {
      key: "warehouse",
      label: "Warehouse",
    },
    {
      key: "businessUnit",
      label: "Byusiness Unit",
    },
    {
      key: "status",
      label: "Status",
    },
  ],
  isSearchable: true,
};

export const formValidationSchema = Yup.object().shape({
  location: Yup.string().required('Part Number Required'),
  warehouse: Yup.object().shape({
    value: Yup.string().required("Item Type is required"),
  }),
  businessUnit: Yup.object().shape({
    value: Yup.string().required("Item Sub Category is required"),
  }),
});

export const itemProfileViewUpdatePayloadData = (value) => {
  console.log(value)
  const payload = {
    itemName: value?.itemName,
    partNumber: value?.partNumber,
    uom: {
      value: value?.uomId,
      label: value?.uomName,
    },
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
    itemCode: value?.itemCode,
    sl: value?.sl,

  };
  return payload;
};

