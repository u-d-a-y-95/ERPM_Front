import httpClient from "../../../services/http/http-client";

//create api call
export const createCustomer = (values, formik, populateTable) => {
  const obj = createPayloadChange(values);
  httpClient
    .postData("https://demoerpm.ibos.io/domain/Customer/Create", obj)
    .then((res) => {
<<<<<<< HEAD
      formik.setValues(null);
=======
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
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
<<<<<<< HEAD
      const values = getPayloadChange(res?.data?.data);
      setter(values && values);
=======
      setter(res?.data);
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
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
<<<<<<< HEAD
export const updateCustomer = (
  values,
  formik,
  populateTable,
  setUpdateFormData
) => {
=======
export const updateCustomer = (values, formik, populateTable) => {
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
  const obj = updatePayloadChange(values);
  httpClient
    .putData("https://demoerpm.ibos.io/domain/Customer/Update", obj)
    .then((res) => {
<<<<<<< HEAD
      setUpdateFormData(null);
=======
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
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

<<<<<<< HEAD
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
=======
//create payload change
const createPayloadChange = (values) => {
  const payload = {
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
    accountId: +1,
    businessUnitId: +1,
    customerName: values?.customerName || "",
    customerAddress: values?.customerAddress || "",
<<<<<<< HEAD
    contactNumber: values?.contactNumber || "",
    customerTypeId: values?.customerType?.value,
    email: values?.customerEmail || "",
    billingName: values?.billingName || "",
    billingAddress: values?.billingAddress || "",
    nid: values?.nid || "",
    bin: values?.bin || "",
    licenseNo: values?.licenseNo || "",
    intActionBy: values?.intActionBy || +0,
=======
    contactNumber: values?.contactNumber?.toString() || "",
    customerTypeId: +1,
    email: values?.customerEmail || "",
    billingName: values?.billingName || "",
    billingAddress: values?.billingAddress || "",
    nid: values?.nid?.toString() || "",
    bin: values?.bin || "",
    licenseNo: values?.licenseNo || "",
    intActionBy: +0,
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
  };
  return payload;
};

//update payload change
const updatePayloadChange = (values) => {
  const payload = {
<<<<<<< HEAD
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
=======
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
>>>>>>> 6082f03b6956fb1773c3c8c871d11a01a34b44b8
  };
  return payload;
};
