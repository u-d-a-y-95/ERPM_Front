import httpClient from "../../../services/http/http-client";

export const createItemCategory = (values, formik, populateTable) => {
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
  const payload = {
    accountId: 1,
    businessUnit: values.businessUnit || "",
    itemCategoryId: values.category || 0,
    itemTypeId: values.itemType || 0,
    actionBy: 1234,
  };
  return payload;
};
