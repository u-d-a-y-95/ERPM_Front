import httpClient from "../../../services/http/http-client";

//create api call
export const createSupplier = (values, formik, populateTable) => {
  const obj = createPayloadChange(values);
  httpClient
    .postData("https://demoerpm.ibos.io/domain/Supplier/Create", obj)
    .then((res) => {
      formik.resetForm();
      populateTable();
    })
    .catch((err) => {
      console.log(err?.message);
    });
};

//landing api call not done
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
        ? `https://localhost:44339/domain/Supplier/GetListForPaignation?search=${searchTerm}&accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&PageNo=${pageNo}&PageSize=${pageSize}`
        : `https://localhost:44339/domain/Supplier/GetListForPaignation?accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&PageNo=${pageNo}&PageSize=${pageSize}`
    )
    .then((res) => {
      setter(res?.data);
    })
    .catch((err) => {
      setter([]);
      console.log(err?.message);
    });
};

// get by id api call
// export const getRowById = (id, populateTable, setter) => {
//   httpClient
//     .getData(
//       `https://demoerpm.ibos.io/domain/Supplier/GetById?supplierId=${id}`
//     )
//     .then((res) => {
//       const payload = getByIdPayloadChange(res?.data);
//       setter(payload);
//       populateTable();
//     })
//     .catch((err) => {
//       setter({});
//       console.log(err?.message);
//     });
// };

//update business unit
export const updateSupplier = (values, formik, populateTable) => {
  const obj = updatePayloadChange(values);
  httpClient
    .putData("https://demoerpm.ibos.io/domain/Supplier/Update", obj)
    .then((res) => {
      formik.resetForm();
      populateTable();
    })
    .catch((err) => {
      console.log(err?.message);
    });
};

// supplier Dropdown List list
export const supplierDropdownListAction = (setter) => {
  httpClient
    .getData("https://demoerpm.ibos.io/domain/SupplierType/GetList")
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
    supplierCode: values?.supplierType?.code,
    supplierName: values?.supplierName || "",
    supplierAddress: values?.supplierAddress || "",
    contactNumber: values?.contactNumber?.toString() || "",
    bin: values?.bin || "",
    licenseNo: values?.licenseNo || "",
    email: "kolmilota@gmail.com",
    nid: values?.nid?.toString(),
    supplierTypeId: +3,
    actionBy: +0,
  };
  return payload;
};

//update payload change
const updatePayloadChange = (values) => {
  const payload = {
    supplierId: values?.supplierId,
    supplierName: values?.supplierName || "",
    supplierAddress: values?.supplierAddress || "",
    contactNumber: values?.contactNumber || "",
    bin: values?.bin || "",
    licenseNo: values?.licenseNo || "",
    email: values?.email || "",
    nid: values?.nid || "",
  };
  return payload;
};

//get bi id payload change
// const getByIdPayloadChange = (values) => {
//   const payload = {
//     sl: values?.sl,
//     supplierId: values?.supplierId,
//     supplierCode: values?.supplierCode,
//     supplierName: values?.supplierName,
//     supplierAddress: values?.supplierAddress,
//     contactNumber: values?.contactNumber,
//     bin: values?.bin,
//     licenseNo: values?.licenseNo,
//     email: values?.email,
//     nid: values?.nid,
//     // accountId: 1,
//     // businessUnitId: 1,
//     // supplierTypeId: 3,
//     // actionBy: 0,
//   };
//   return payload;
// };
