import httpClient from "../../../services/http/http-client";

export const createPurchaseOrder = (payload, formik, populateTable) => {
  const obj = createPayloadChange(payload);
  httpClient
    .postData("https://jsonplaceholder.typicode.com/posts", obj)
    .then((res) => {
      formik.resetForm();
      populateTable();
    });
};
export const getList = (setData) => {
  httpClient
    .getData("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      setData(res.data);
    });
};
export const purchaseOrderDeleteData = (id, populateTable) => {
  httpClient
    .deleteData(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
      populateTable();
    });
};

const createPayloadChange = (payload) => {
  return payload;
};
