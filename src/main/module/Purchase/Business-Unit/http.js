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
export const getList = (accId, pageNo, pageSize, setData, searchTerm) => {
  httpClient
    .getData(
      searchTerm
        ? `https://demoerpm.ibos.io/domain/BusinessUnit/GetList?searchTerm=${searchTerm}&AccountId=${accId}&viewOrder=desc&PageNo=${pageNo}&PageSize=${pageSize}`
        : `https://demoerpm.ibos.io/domain/BusinessUnit/GetList?AccountId=${accId}&viewOrder=desc&PageNo=${pageNo}&PageSize=${pageSize}`
    )
    .then((res) => {
      setData(res?.data?.data);
    });
};
//get by id for get by id api call
// export const businessUnitDeleteData = (id, populateTable) => {
//   httpClient
//     .deleteData(
//       `https://demoerpm.ibos.io/domain/BusinessUnit/GetById?businessUnitId=${id}`
//     )
//     .then((res) => {
//       populateTable();
//     });
// };

//base currency dropdown list

export const currencyDropdownListAction = (setter) => {
  httpClient
    .getData(``)
    .then((res) => {
      setter(res?.data);
    })
    .catch((err) => console.log(err));
};

//update business unit
export const updateBusinessUnit = (
  values,
  formik,
  populateTable,
  updateFormData,
  setUpdateFormData
) => {
  console.log(values);
  const obj = updatePayloadChange(values, updateFormData);
  httpClient
    .putData("https://demoerpm.ibos.io/domain/BusinessUnit/Update", obj)
    .then((res) => {
      formik.resetForm();
      setUpdateFormData(null);
      populateTable();
    });
};

//create payload change
const createPayloadChange = (values) => {
  const payload = {
    accountId: +1,
    businessUnitId: 1,
    businessUnitCode: values?.businessUnitCode || "",
    businessUnitName: values?.businessUnitName || "",
    businessUnitAddress: values?.businessUnitAddress || "",
    baseCurrency: values?.baseCurrency || "",
    actionBy: +1234,
  };
  return payload;
};

//update payload change
const updatePayloadChange = (values, updateFormData) => {
  const payload = {
    businessUnitId: updateFormData?.businessUnitId,
    actionBy: 1,
    businessUnitCode: values?.businessUnitCode || "",
    businessUnitName: values?.businessUnitName || "",
    businessUnitAddress: values?.businessUnitAddress || "",
    baseCurrency: values?.baseCurrency || "",
  };
  return payload;
};
