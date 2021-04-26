import httpClient from "../../../services/http/http-client";
import { successInsertMessage, successUpdateMessage } from './../../../constant/message.constant';
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
    .postData("/domain/ItemBasicInfo/Create", obj)
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
    accountId: +1,
    itemCode: values?.itemCode || "",
    itemName: values?.itemName || "",
    partNumber: values?.partNumber || "",
    itemTypeId: values?.itemType?.value || +0,
    itemCategoryId: values?.category?.value || +0,
    itemSubCategoryId: values?.subCategory?.value || +0,
    uom: values?.uom?.value || +0,
    actionBy: +1234,
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
      `https://demoerpm.ibos.io/domain/ItemBasicInfo/GetLandingPasignation?accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&pageNo=${pageNo}&pageSize=${pageSize}`
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

// Get Payload Change
// const getPayloadChange = (values) => {
//   console.log(values)
//   return values?.map((data) => ({
//     sl: data?.sl,
//     // uom: data?.uom?.value,
//     partNumber: data?.value?.partNumber,
//     itemName: data?.itemName,
//     itemCategoryId: data?.itemCategoryId,
//     itemCategoryName: data?.itemCategoryName,
//     itemCode: data?.itemCode,
//     itemSubCategoryId: data?.itemSubCategoryId,
//     itemSubCategoryName: data?.itemSubCategoryName,
//     itemTypeId: data?.itemTypeId,
//     itemTypeName: data?.itemTypeName,
//   }));
// };

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
    .putData("/domain/ItemBasicInfo/Update", obj)
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
    accountId: 0,
    actionBy: 0,
    itemId: 0,
    itemCode: values?.itemCode || "",
    itemName: values?.itemName || "",
    partNumber: values?.partNumber || "",
    uomId: values?.uom?.value,
    // itemTypeId: values?.itemType?.value || 0,
    // itemCategoryId: values?.category?.value || 0,
    // itemSubCategoryId: values?.subCategory?.value || 0,
    itemTypeId: 0,
    itemCategoryId: 0,
    itemSubCategoryId: 0,
  };

  return payload;
};

// Item Type Drop Down List
export const getItemTypeDropdownListAction = (setter) => {
  httpClient
    .getData("https://demoerpm.ibos.io/domain/ItemType/GetList")
    .then((res) => {
      setter(res?.data);
    })
    .catch((error) => {
      setter([]);
      console.log("Error", error?.message);
    });
};

// Item Category Drop Down List
export const getItemCategoryDropdownListAction = (
  accId,
  businessId,
  itemTypeId,
  setter
) => {
  httpClient
    .getData(
      `https://demoerpm.ibos.io/domain/ItemCategory/GetListByItemType?accountId=${accId}&businessUnitId=${businessId}&itemTypeId=${itemTypeId}`
    )
    .then((res) => {
      const newData = res?.data?.map((item) => ({
        value: item?.itemCategoryId,
        label: item?.itemCategoryName,
      }));
      setter(newData);
      console.log(newData);
    })
    .catch((error) => {
      setter([]);
      console.log("Error", error?.message);
    });
};

// Item Sub Category Drop Down List
export const getItemSubCategoryDropdownListAction = (
  accId,
  businessId,
  itemCategoryId,
  setter
) => {
  httpClient
    .getData(
      `https://demoerpm.ibos.io/domain/ItemSubCategory/GetListByItemCategory?accountId=${accId}&businessUnitId=${businessId}&itemCategoryId=${itemCategoryId}`
    )
    .then((res) => {
      const newData = res?.data?.map((item) => ({
        value: item?.itemSubCategoryId,
        label: item?.itemSubCategoryName,
      }));
      setter(newData);
    })
    .catch((error) => {
      setter([]);
      console.log("Error", error?.message);
    });
};

// Item UOM Drop Down List
export const getUomDropdownListAction = (setter) => {
  httpClient
    .getData(`https://demoerpm.ibos.io/domain/DDL/GetUOMDDL`)
    .then((res) => {
      setter(res?.data);
    })
    .catch((error) => {
      setter([]);
      console.log("Error", error?.message);
    });
};
