import httpClient from "../../../services/http/http-client";
import { toast } from "react-toastify";
import {
  successInsertMessage,
  successUpdateMessage,
} from "../../../constant/message.constant";

//create api call
export const createWarehouse = (
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
    .postData("/inventory/Warehouse/Create", obj)
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

//landing api call
export const getList = (setter, setLoading) => {
  setLoading(true);
  httpClient
    .getData(`/inventory/Warehouse/GetList`)
    .then((res) => {
      const values = getPayloadChange(res?.data);
      setter(values && values);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      setter([]);
      toast.error(error?.response?.data?.message);
    });
};

//get by id for get by id api call
// export const businessUnitDeleteData = (id, populateTable) => {
//   httpClient
//     .deleteData(`/domain/Customer/GetById/${id}`)
//     .then((res) => {
//       populateTable();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

//update business unit
export const updateWarehouse = (
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
    .putData("/inventory/Warehouse/Update", obj)
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

// customer Dropdown List list
export const warehouseDropdownListAction = (setter, setLoading, id) => {
  setLoading(true);
  httpClient
    .getData(`/domain/BusinessUnit/GetListByAccountId?accountId=${id}`)
    .then((res) => {
      const newData = warehouseDropdownListPayloadChange(res?.data);
      setter(newData);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      setter([]);
      toast.error(err?.response?.data?.message);
    });
};

//warehouse dropdownn list payload change;
const warehouseDropdownListPayloadChange = (values) => {
  const payload = values.map((item) => ({
    label: item?.businessUnitName,
    value: item.businessUnitId,
    code: item.businessUnitCode,
  }));
  return payload;
};

//get payload change
const getPayloadChange = (values) => {
  console.log(values);
  return values?.map((data, index) => ({
    sl: data?.sl || index + 1,
    warehouseCode: data?.strWarehouseCode,
    warehouseName: data?.strWarehouseName,
    warehouseAddress: data?.strWarehouseAddress,
    businessUnit: data?.intBusinessUnitId || 1,
    intId: data?.intId,
  }));
};

//create payload change
const createPayloadChange = (values) => {
  const payload = {
    // login theke asbe
    intAccountId: 1,
    intBusinessUnitId: 1,
    intActionBy: 0,
    strWarehouseCode: values?.warehouseCode || "",
    strWarehouseName: values?.warehouseName || "",
    strWarehouseAddress: values?.warehouseAddress || "",
  };
  return payload;
};

//update payload change
const updatePayloadChange = (values) => {
  const payload = {
    intId: values?.intId,
    intAccountId: 1,
    intBusinessUnitId: 1,
    strWarehouseCode: "string",
    strWarehouseName: "string",
    strWarehouseAddress: "string",
    intActionBy: 0,
  };
  return payload;
};
