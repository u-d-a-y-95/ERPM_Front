import httpClient from "../../../services/http/http-client";
import { successInsertMessage, successUpdateMessage } from '../../../constant/message.constant';
import { toast } from "react-toastify";

//Create Api Call
export const createItemProfile = (
  values,
  formik,
  populateTable,
  onClickClose,
  setLoading
) => {
  onClickClose();
  setLoading(true);
  const obj = createPayloadChange(values);
  httpClient
    .postData("/domain/inventory/WarehouseLocation/Create", obj)
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

//create payload change
const createPayloadChange = (values) => {
  console.log(values);
  const payload = {
    strWarehouseLocationCode: "string",
    strWarehouseLocationName: "string",
    intAccountId: 1,
    intBusinessUnitId: 1,
    intWarehouseId: 126,
    intActionBy: 0
  };
  return payload;
};

//Landing Api Call
export const getList = (
  accId,
  businessUnitId,
  pageNo,
  pageSize,
  setter,
  setLoading
) => {
  setLoading(true);
  httpClient
    .getData(
      `/domain/inventory/WarehouseLocation/GetList`
    )
    .then((res) => {
      setter(res?.data?.data);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      setter([]);
      toast.error(error?.response?.data?.message);
    });
};


//update Item Profile
export const updateItemProfile = (
  values,
  formik,
  populateTable,
  formData,
  setFormData,
  onClickClose,
  setLoading
) => {
  onClickClose()
  setLoading(true)
  const obj = updatePayloadChange(values);
  httpClient
    .putData("/domain/inventory/WarehouseLocation/Update", obj)
    .then((res) => {
      setFormData(null);
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

// Update Payload Change
const updatePayloadChange = (values) => {
  console.log(values);
  const payload = {
    strWarehouseLocationCode: "string",
    strWarehouseLocationName: "string",
    intAccountId: 1,
    intBusinessUnitId: 1,
    intWarehouseId: 126,
    intActionBy: 0
  };

  return payload;
};

// Business Unit Down List
export const getBusinessUnitDropdownListAction = (setter, setLoading, id) => {
  setLoading(true);
  httpClient
    .getData(`/domain/BusinessUnit/GetListByAccountId?accountId=${id}`)
    .then((res) => {
      const newData = businessUnitDropdownPayloadChange(res?.data);
      setter(newData);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      setter([]);
      toast.error(error?.response?.data?.message);
    });
};

const businessUnitDropdownPayloadChange = (valuse) => {
  const payload = valuse.map((item) => ({
    label: item?.businessUnitName,
    value: item.businessUnitId,
    code: item.businessUnitCode,
  }));
  return payload;
}

// Wire House Drop Down List
export const getWarehouseDropdownListAction = (setter) => {
  httpClient
    .getData("/domain/inventory/Warehouse/GetList")
    .then((res) => {
      setter(res?.data);
    })
    .catch((error) => {
      setter([]);
      console.log("Error", error?.message);
    });
};
