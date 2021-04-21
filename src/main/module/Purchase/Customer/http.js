import httpClient from "../../../services/http/http-client";

//create api call
export const createCustomer = (values, formik, populateTable) => {
  const obj = createPayloadChange(values);
  httpClient
    .postData("https://demoerpm.ibos.io/domain/Customer/Create", obj)
    .then((res) => {
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
  searchTerm
) => {
  httpClient
    .getData(
      searchTerm
        ? `https://demoerpm.ibos.io/domain/Customer/GetList?search=${searchTerm}&accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&pageNo=${pageNo}&pageSize=${pageSize}`
        : `https://demoerpm.ibos.io/domain/Customer/GetList?accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&pageNo=${pageNo}&pageSize=${pageSize}`
    )
    .then((res) => {
      setter(res?.data);
    })
    .catch((err) => {
      setter([]);
      console.log(err);
    });
};

//get by id for delete api call
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
export const updateCustomer = (values, formik, populateTable) => {
  const obj = updatePayloadChange(values);
  httpClient
    .putData("https://demoerpm.ibos.io/domain/Customer/Update", obj)
    .then((res) => {
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

//create payload change
const createPayloadChange = (values) => {
  const payload = {
    accountId: +1,
    businessUnitId: +1,
    customerName: values?.customerName || "",
    customerAddress: values?.customerAddress || "",
    contactNumber: values?.contactNumber?.toString() || "",
    customerTypeId: +1,
    email: values?.customerEmail || "",
    billingName: values?.billingName || "",
    billingAddress: values?.billingAddress || "",
    nid: values?.nid?.toString() || "",
    bin: values?.bin || "",
    licenseNo: values?.licenseNo || "",
    intActionBy: +0,
  };
  return payload;
};

//update payload change
const updatePayloadChange = (values) => {
  const payload = {
    customerId: +1,
    customerName: values?.customerName || "",
    customerAddress: values?.customerAddress || "",
    contactNumber: values?.contactNumber?.toString() || "",
    email: values?.customerEmail || "",
    billingName: values?.billingName || "",
    billingAddress: values?.billingAddress || "",
    nid: values?.nid?.toString() || "",
    bin: values?.bin || "",
    licenseNo: values?.licenseNo || "",
    intActionBy: +0,
  };
  return payload;
};
