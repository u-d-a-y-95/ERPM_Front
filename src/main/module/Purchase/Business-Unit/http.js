import httpClient from "../../../services/http/http-client";

//create api call
export const createBusinessUnit = (values, formik, populateTable) => {
  const obj = createPayloadChange(values);
  httpClient
    .postData("https://demoerpm.ibos.io/domain/BusinessUnit/Create", obj)
    .then((res) => {
      formik.resetForm();
      populateTable();
    });
};

//landing api call
export const getList = (accId, pageNo, pageSize, setData) => {
  httpClient
    .getData(
      `https://demoerpm.ibos.io/domain/BusinessUnit/GetList?searchTerm=dem&AccountId=${accId}&viewOrder=asc&PageNo=${pageNo}&PageSize=${pageSize}`
    )
    .then((res) => {
      setData(res?.data);
    });
};

//get by id for delete api call
// export const businessUnitDeleteData = (id, populateTable) => {
//   httpClient
//     .deleteData(
//       `https://demoerpm.ibos.io/domain/BusinessUnit/GetById?businessUnitId=${id}`
//     )
//     .then((res) => {
//       populateTable();
//     });
// };

//update business unit
export const updateBusinessUnit = (values, formik, populateTable) => {
  const obj = updatePayloadChange(values);
  httpClient
    .putData("https://demoerpm.ibos.io/domain/BusinessUnit/Update", obj)
    .then((res) => {
      formik.resetForm();
      populateTable();
    });
};

//create payload change
const createPayloadChange = (values) => {
  const payload = {
    accountId: +1,
    businessUnitCode: values?.businessUnitCode || "",
    businessUnitName: values?.businessUnitName || "",
    businessUnitAddress: values?.businessUnitAddress || "",
    actionBy: +1234,
  };
  return payload;
};

//update payload change
const updatePayloadChange = (values) => {
  const payload = {
    businessUnitCode: values?.businessUnitCode || "",
    businessUnitName: values?.businessUnitName || "",
    businessUnitAddress: values?.businessUnitAddress || "",
  };
  return payload;
};
