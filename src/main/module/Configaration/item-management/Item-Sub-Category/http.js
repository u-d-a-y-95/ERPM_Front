import httpClient from "../../../../services/http/http-client";
import {
  successInsertMessage,
  successUpdateMessage,
} from "../../../../constant/message.constant";
import { toast } from "react-toastify";

export const createItemSubCategory = (
  values,
  userCurrentInfo,
  formik,
  populateTable,
  closeModal,
  setLoading
) => {
  closeModal();
  setLoading(true);
  const obj = createPayloadChange(values, userCurrentInfo);
  httpClient
    .postData("/domain/ItemSubCategory/Create", obj)
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

export const getList = (
  pageNo,
  pageSize,
  setter,
  setLoading,
  userCurrentInfo
) => {
  setLoading(true);
  httpClient
    .getData(
      `/domain/ItemSubCategory/GetListPagination?accountId=${userCurrentInfo?.accountId}&pageNo=${pageNo}&pageSize=${pageSize}&viewOrder=desc`
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

// Item Type Drop Down List
export const getItemTypeDropdownList = (setter, setLoading) => {
  setLoading(true);
  httpClient
    .getData("/domain/ItemType/GetList")
    .then((res) => {
      setter(res?.data);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      setter([]);
      toast.error(error?.response?.data?.message);
    });
};

// Item Type Drop Down List
export const getItemCategoryDropdownList = (
  setter,
  setLoading,
  userCurrentInfo,
  id
) => {
  setLoading(true);
  httpClient
    .getData(
      `/domain/ItemCategory/GetListByItemType?accountId=${userCurrentInfo?.accountId}&itemTypeId=${id}`
    )
    .then((res) => {
      const newData = res?.data?.map((item) => ({
        label: item?.itemCategoryName,
        value: item?.itemCategoryId,
      }));
      setter(newData);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      setter([]);
      toast.error(error?.response?.data?.message);
    });
};

//update Item Sub Category
export const updateItemSubCategory = (
  values,
  formik,
  populateTable,
  closeModal,
  setUpdateFormData,
  setLoading,
  userCurrentInfo
) => {
  closeModal();
  setLoading(true);
  const obj = updatePayloadChange(values, userCurrentInfo);
  httpClient
    .putData("/domain/ItemSubCategory/Update", obj)
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

//create payload change
const createPayloadChange = (values, userCurrentInfo) => {
  const payload = {
    actionBy: userCurrentInfo?.userId,
    accountId: userCurrentInfo?.accountId,
    itemSubCategoryName: values.subCategory || 0,
    itemTypeId: values?.itemType?.value || 0,
    itemTypeName: values.itemType.label || "",
    itemCategoryId: values?.itemCategory?.value || 0,
    itemCategoryName: values.itemCategory.label || "",
  };
  return payload;
};

// Update Payload Change
const updatePayloadChange = (values, userCurrentInfo) => {
  const payload = {
    itemSubCategoryId: values?.itemSubCategoryId,
    itemSubCategoryName: values?.subCategory || "",
    itemTypeId: values?.itemType?.value || 0,
    itemCategoryId: values?.itemCategory?.value || 0,
    actionBy: userCurrentInfo?.userId,
  };

  return payload;
};
