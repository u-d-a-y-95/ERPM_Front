import httpClient from "../../../services/http/http-client";
import { toast } from "react-toastify";
import {
  successInsertMessage,
  successUpdateMessage,
} from "../../../constant/message.constant.js";

//create api call
export const createSupplier = (
  values,
  formik,
  populateTable,
  setLoading,
  closeModal
) => {
  setLoading(true);
  const obj = createPayloadChange(values);
  closeModal();
  httpClient
    .postData("/domain/Supplier/Create", obj)
    .then((res) => {
      formik.setValues(null);
      formik.resetForm();
      populateTable();
      setLoading(false);
      toast.success(successInsertMessage);
    })
    .catch((error) => {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    });
};

//landing api call not done
export const getList = (
  accId,
  pageNo,
  pageSize,
  setter,
  businessUnitId,
  searchTerm,
  setLoading
) => {
  setLoading(true);
  httpClient
    .getData(
      searchTerm
        ? `/domain/Supplier/GetList?search=${searchTerm}&accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&PageNo=${pageNo}&PageSize=${pageSize}`
        : `/domain/Supplier/GetList?accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&PageNo=${pageNo}&PageSize=${pageSize}`
    )
    .then((res) => {
      setter(res?.data?.data);
      setLoading(false);
    })
    .catch((error) => {
      setter([]);
      setLoading(false);
      toast.error(error?.response?.data?.message);
    });
};

// get by id api call
// export const getRowById = (id, populateTable, setter) => {
//   httpClient
//     .getData(
//       `/domain/Supplier/GetById?supplierId=${id}`
//     )
//     .then((res) => {
//       const payload = getByIdPayloadChange(res?.data);
//       setter(payload);
//       populateTable();
//     })
//     .catch((err) => {
//       setter({});
//      toast.error(error?.response?.data?.message);
//     });
// };

//update business unit
export const updateSupplier = (
  values,
  formik,
  populateTable,
  setUpdateFormData,
  setLoading,
  closeModal
) => {
  setLoading(true);
  const obj = updatePayloadChange(values);
  closeModal();
  httpClient
    .putData("/domain/Supplier/Update", obj)
    .then((res) => {
      setUpdateFormData(null);
      formik.resetForm();
      populateTable();
      setLoading(false);
      toast.success(successUpdateMessage);
    })
    .catch((error) => {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    });
};

// supplier Dropdown List list
export const supplierDropdownListAction = (setter, setLoading) => {
  setLoading(true);
  httpClient
    .getData("/domain/SupplierType/GetList")
    .then((res) => {
      setter(res?.data);
      setLoading(false);
    })
    .catch((error) => {
      setter([]);
      setLoading(false);
      toast.error(error?.response?.data?.message);
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
