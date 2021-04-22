import httpClient from "../../../services/http/http-client";

//create api call
export const createSupplier = (values, formik, populateTable) => {
  const obj = createPayloadChange(values);
  httpClient
    .postData("https://demoerpm.ibos.io/domain/Supplier/Create", obj)
    .then((res) => {
      formik.setValues(null);
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
        ? `https://demoerpm.ibos.io/domain/Supplier/GetList?search=${searchTerm}&accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&PageNo=${pageNo}&PageSize=${pageSize}`
        : `https://demoerpm.ibos.io/domain/Supplier/GetList?accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&PageNo=${pageNo}&PageSize=${pageSize}`
    )
    .then((res) => {
      setter(res?.data?.data);
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
export const updateSupplier = (
  values,
  formik,
  populateTable,
  setUpdateFormData
) => {
  const obj = updatePayloadChange(values);
  httpClient
    .putData("https://demoerpm.ibos.io/domain/Supplier/Update", obj)
    .then((res) => {
      setUpdateFormData(null);
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
    actionBy: +0,
    supplierName: values?.supplierName || "",
    supplierAddress: values?.supplierAddress || "",
    contactNumber: values?.contactNumber || "",
    bin: values?.bin || "",
    licenseNo: values?.licenseNo || "",
    email: values?.email || "",
    nid: values?.nid || "",
    supplierTypeId: values?.supplierType?.value || 0,
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
