import httpClient from "../../../services/http/http-client";
import { toast } from "react-toastify";
import {
  successCreateMessage,
  successUpdateMessage,
} from "../../../constant/message.constant";

//create api call
export const createCustomer = (values, formik, populateTable, setIsLoading) => {
  setIsLoading(true);
  const obj = createPayloadChange(values);
  httpClient
    .postData("/domain/Customer/Create", obj)
    .then((res) => {
      formik.setValues(null);
      formik.resetForm();
      populateTable();
      setIsLoading(false);
      toast.success(successCreateMessage);
    })
    .catch((error) => {
      setIsLoading(false);
      toast.error(error?.response?.data?.message);
    });
};

//landing api call
export const getList = (
  accId,
  pageNo,
  pageSize,
  setter,
  businessUnitId,
  searchTerm,
  setIsLoading
) => {
  setIsLoading(true);
  httpClient
    .getData(
      searchTerm
        ? `/domain/Customer/GetList?search=${searchTerm}&accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&pageNo=${pageNo}&pageSize=${pageSize}`
        : `/domain/Customer/GetList?accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&pageNo=${pageNo}&pageSize=${pageSize}`
    )
    .then((res) => {
      const values = getPayloadChange(res?.data?.data);
      setter(values && values);
      setIsLoading(false);
    })
    .catch((error) => {
      setIsLoading(false);
      setter([]);
      toast.error(error?.response?.data?.message);
    });
};

//get by id for get by id api call
// export const businessUnitDeleteData = (id, populateTable) => {
//   httpClient
//     .deleteData(`https://demoerpm.ibos.io//domain/Customer/GetById/${id}`)
//     .then((res) => {
//       populateTable();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

//update business unit
export const updateCustomer = (
  values,
  formik,
  populateTable,
  setUpdateFormData,
  setIsLoading
) => {
  setIsLoading(true);
  const obj = updatePayloadChange(values);
  httpClient
    .putData("/domain/Customer/Update", obj)
    .then((res) => {
      setUpdateFormData(null);
      formik.resetForm();
      populateTable();
      setIsLoading(false);
      toast.success(successUpdateMessage);
    })
    .catch((error) => {
      setIsLoading(false);
      toast.error(error?.response?.data?.message);
    });
};

// customer Dropdown List list
export const customerDropdownListAction = (setter, setIsLoading) => {
  setIsLoading(true);
  httpClient
    .getData("/domain/CustomerType/GetList")
    .then((res) => {
      setter(res?.data);
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      setter([]);
      toast.error(err?.response?.data?.message);
    });
};

//get payload change
const getPayloadChange = (values) => {
  return values?.map((data) => ({
    accountId: data?.accountId,
    billingName: data?.billingName,
    billingAddress: data?.billingAddress,
    bin: data?.bin,
    businessUnitId: data?.businessUnitId,
    contactNumber: data?.contactNumber,
    customerAddress: data?.customerAddress,
    customerCode: data?.customerCode,
    customerId: data?.customerId,
    address: data?.customerAddress,
    customerName: data?.customerName,
    customerTypeName: data?.customerTypeName,
    customerTypeId: data?.customerTypeId,
    nid: data?.nid,
    licenseNo: data?.licenseNo,
    customerEmail: data?.email,
    sl: data?.sl,
  }));
};

//create payload change
const createPayloadChange = (values) => {
  const payload = {
    // login theke asbe
    accountId: +1,
    businessUnitId: +1,
    customerName: values?.customerName || "",
    customerAddress: values?.customerAddress || "",
    contactNumber: values?.contactNumber || "",
    customerTypeId: values?.customerType?.value,
    email: values?.customerEmail || "",
    billingName: values?.billingName || "",
    billingAddress: values?.billingAddress || "",
    nid: values?.nid || "",
    bin: values?.bin || "",
    licenseNo: values?.licenseNo || "",
    intActionBy: values?.intActionBy || +0,
  };
  return payload;
};

//update payload change
const updatePayloadChange = (values) => {
  const payload = {
    customerId: values?.customerId,
    customerName: values?.customerName || "",
    customerAddress: values?.customerAddress || "",
    contactNumber: values?.contactNumber || "",
    email: values?.customerEmail || "",
    billingName: values?.billingName || "",
    billingAddress: values?.billingAddress || "",
    nid: values?.nid || "",
    bin: values?.bin || "",
    licenseNo: values?.licenseNo || "",
    intActionBy: values?.intActionBy || +0,
  };
  return payload;
};
