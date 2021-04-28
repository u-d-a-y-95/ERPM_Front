import httpClient from "../../../../services/http/http-client";
import { successInsertMessage, successUpdateMessage } from '../../../../constant/message.constant';
import { toast } from "react-toastify";

//Item Category Create Api Binding
export const createItemCategory = (
  values,
  userCurrentInfo,
  formik,
  populateTable,
  onClickClose,
  setLoading) => {
  onClickClose();
  setLoading(true);
  const obj = createPayloadChange(values, userCurrentInfo);
  httpClient
    .postData("/domain/ItemCategory/Create", obj)
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

//Create Payload Change
const createPayloadChange = (values, userCurrentInfo) => {
  // console.log(values)
  const payload = {
    accountId: userCurrentInfo?.accountId,
    itemCategoryName: values.category || "",
    itemTypeId: values.itemType.value || 0,
    itemTypeName: values.itemType.label || "",
    actionBy: userCurrentInfo?.userId,
  };

  return payload;
};

//Item Category Landing API Binding
export const getList = (
  userCurrentInfo,
  pageNo,
  pageSize,
  setter,
  setLoading
) => {
  setLoading(true);
  httpClient
    .getData(
      `/domain/ItemCategory/GetListPagination?accountId=${userCurrentInfo.accountId}&pageNo=${pageNo}&pageSize=${pageSize}&viewOrder=desc`
    )
    .then((res) => {
      setter(res?.data.data);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      setter([]);
      toast.error(error?.response?.data?.message);
    });
};


//update Item Profile
export const updateItemCategory = (
  values,
  userCurrentInfo,
  formik,
  populateTable,
  formData,
  setFormData,
  onClickClose,
  setLoading,
  changeData
        
) => {
  console.log(values)
  onClickClose()
  setLoading(true)
  const obj = updatePayloadChange(values, userCurrentInfo, changeData);
  httpClient
    .putData("/domain/ItemCategory/Update", obj)
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
const updatePayloadChange = (values, userCurrentInfo) => {
  // console.log(values);
  console.log(values)
  const payload = {
    accountId: userCurrentInfo?.accountId,
    itemTypeId: values?.itemType?.value || 0,
    // itemCategoryId: 1,   
    itemCategoryName: values?.category || "",
    actionBy: userCurrentInfo?.userId,
  };

  return payload;
};


// Business Uint Dropdown List list
export const getBusinessUintDropdownListAction = (setter, setLoading, userCurrentInfo) => {
  setLoading(true);
  httpClient
    .getData(`/domain/BusinessUnit/GetListByAccountId?accountId=${userCurrentInfo?.accountId}`)
    .then((res) => {
      const newData = businessUnitDropdownListPayloadChange(res?.data);
      setter(newData);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      setter([]);
      toast.error(err?.response?.data?.message);
    });
};

//Business Unt dropdownn list payload change;
const businessUnitDropdownListPayloadChange = (values) => {
  const payload = values.map((item) => ({
    label: item?.businessUnitName,
    value: item.businessUnitId,
    code: item.businessUnitCode,
  }));
  return payload;
};