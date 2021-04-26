import { toast } from "react-toastify";
import httpClient from "../../../services/http/http-client";
import {
  successInsertMessage,
  successUpdateMessage,
} from "../../../constant/message.constant";

//create api call
export const createBusinessUnit = (
  values,
  formik,
  populateTable,
  closeModal,
  setLoading
) => {
  const obj = createPayloadChange(values);
  closeModal();
  setLoading(true);
  httpClient
    .postData("/domain/BusinessUnit/Create", obj)
    .then((res) => {
      formik.resetForm();
      populateTable();
      setLoading(false);
      toast.success(successInsertMessage);
    })
    .catch((error) => {
      setLoading(false);
      toast.error(error.response.data.message);
    });
};

//landing api call
export const getList = (
  accId,
  pageNo,
  pageSize,
  setData,
  searchTerm,
  setLoading
) => {
  setLoading(true);
  httpClient
    .getData(
      searchTerm
        ? `/domain/BusinessUnit/GetList?searchTerm=${searchTerm}&AccountId=${accId}&viewOrder=desc&PageNo=${pageNo}&PageSize=${pageSize}`
        : `/domain/BusinessUnit/GetList?AccountId=${accId}&viewOrder=desc&PageNo=${pageNo}&PageSize=${pageSize}`
    )
    .then((res) => {
      setData(res?.data?.data);
      setLoading(false);
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
  setUpdateFormData,
  closeModal,
  setLoading
) => {
  closeModal();
  setLoading(true);
  const obj = updatePayloadChange(values, updateFormData);
  httpClient
    .putData("/domain/BusinessUnit/Update", obj)
    .then((res) => {
      formik.resetForm();
      setUpdateFormData(null);
      populateTable();
      setLoading(false);
      toast.success(successUpdateMessage);
    })
    .catch((error) => {
      setLoading(false);
      toast.warn(error.response.data.message);
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
