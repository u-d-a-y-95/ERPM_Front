import httpClient from "../../../services/http/http-client";

//create api call
export const createBusinessUnit = (values, formik, populateTable) => {
  const obj = createPayloadChange(values);
  httpClient
    .postData("https://localhost:44339/domain/BusinessUnit/Create", obj)
    .then((res) => {
      formik.resetForm();
      populateTable();
    });
};

//landing api call
export const getList = (accId, pageNo, pageSize, setData) => {
  httpClient
    .getData(
      `https://localhost:44339/domain/BusinessUnit/GetLandingPasignation?searchTerm=dem&AccountId=${accId}&viewOrder=asc&PageNo=${pageNo}&PageSize=${pageSize}`
    )
    .then((res) => {
      setData(res?.data);
    });
};

//get by id for delete api call
export const businessUnitDeleteData = (id, populateTable) => {
  httpClient
    .deleteData(
      `https://localhost:44339/domain/BusinessUnit/GetById?businessUnitId=${id}`
    )
    .then((res) => {
      populateTable();
    });
};

//update business unit
export const updateBusinessUnit = (values, formik, populateTable) => {
  const obj = updatePayloadChange(values);
  httpClient
    .putData("https://localhost:44339/domain/BusinessUnit/Update", obj)
    .then((res) => {
      formik.resetForm();
      populateTable();
    });
};

//create payload change
const createPayloadChange = (values) => {
  const payload = {
    intAccountId: 1,
    strBusinessUnitCode: values?.businessUnitCode || "",
    strBusinessUnitName: values?.businessUnitName || "",
    strBusinessUnitAddress: values?.businessUnitAddress || "",
    intActionBy: +1234,
  };
  return payload;
};

//update payload change
const updatePayloadChange = (values) => {
  const payload = {
    intBusinessUnitId: +1,
    strBusinessUnitCode: values?.businessUnitCode || "",
    strBusinessUnitName: values?.businessUnitName || "",
    strBusinessUnitAddress: values?.businessUnitAddress || "",
  };
  return payload;
};
