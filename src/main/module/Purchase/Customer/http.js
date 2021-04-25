import httpClient from "../../../services/http/http-client";
import { toast } from "react-toastify";

//create api call
export const createCustomer = (values, formik, populateTable) => {
  const obj = createPayloadChange(values);
  httpClient
    .postData("https://demoerpm.ibos.io/domain/Customer/Create", obj)
    .then((res) => {
      formik.setValues(null);
      formik.resetForm();
      populateTable();
    })
    .catch((err) => {
      console.log(err.message);
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
        ? `https://demoerpm.ibos.io/domain/Customer/GetList?search=${searchTerm}&accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&pageNo=${pageNo}&pageSize=${pageSize}`
        : `https://demoerpm.ibos.io/domain/Customer/GetList?accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&pageNo=${pageNo}&pageSize=${pageSize}`
    )
    .then((res) => {
      const values = getPayloadChange(res?.data?.data);
      setter(values && values);
      setIsLoading(false);
    })
    .catch((err) => {
      setter([]);
      console.log(err);
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
  setUpdateFormData
) => {
  const obj = updatePayloadChange(values);
  httpClient
    .putData("https://demoerpm.ibos.io/domain/Customer/Update", obj)
    .then((res) => {
      setUpdateFormData(null);
      formik.resetForm();
      populateTable();
    });
};

// customer Dropdown List list
export const customerDropdownListAction = (setter) => {
  httpClient
    .getData("https://demoerpm.ibos.io/domain/CustomerType/GetList")
    .then((res) => {
      setter(res?.data);
    })
    .catch((err) => {
      setter([]);
      console.log(err?.message);
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
