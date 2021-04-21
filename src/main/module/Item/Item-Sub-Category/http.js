import httpClient from "../../../services/http/http-client";

export const createItemSubCategory = (values, formik, populateTable) => {
  const obj = createPayloadChange(values);
  httpClient
    .postData("https://jsonplaceholder.typicode.com/user", obj)
    .then((res) => {
      formik.resetForm();
      populateTable();
    });
};
export const getList = (setData) => {
  httpClient
    .getData("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      setData(res.data);
    });
};

//create payload change
const createPayloadChange = (values) => {
  // console.log(values)
  const payload = {
    sl: 0,
    accountId: 1,
    businessUnitId: values.businessUnit || "",
    itemCategory: values.itemCategoryId
      ? { value: values.itemCategoryId, label: values.itemCategoryName }
      : "",
    subCategory: values.itemSubCategoryId
      ? { value: values.itemSubCategoryId, label: values.itemSubCategoryName }
      : "",
    itemType: values.itemTypeId
      ? { value: values.itemTypeId, label: values.itemTypeName }
      : "",
    actionBy: 1234,

    // sl: 0,
    // itemSubCategoryId: 0,
    // accountId: 0,
    // itemSubCategoryName:"string",
    // businessUnitId: 0,
    // itemTypeId: 0,
    // itemTypeName:"string",
    // itemCategoryId: 0,
    // itemCategoryName:"string",
    // actionBy: 0,
  };
  return payload;
};
