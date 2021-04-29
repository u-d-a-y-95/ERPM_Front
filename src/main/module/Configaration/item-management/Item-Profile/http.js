import httpClient from "../../../../services/http/http-client";
import { successInsertMessage, successUpdateMessage } from '../../../../constant/message.constant';
import { toast } from "react-toastify";

//Create Api Call
export const createItemProfile = (
  values,
  userCurrentInfo,
  formik,
  populateTable,
  onClickClose,
  setLoading
) => {
  onClickClose();
  setLoading(true);
  const obj = createPayloadChange(values, userCurrentInfo);
  httpClient
    .postData("/domain/ItemBusinessUnitConfig/Create", obj)
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
const createPayloadChange = (values, userCurrentInfo) => {
  console.log(values);
  const payload = {
    itemConfig: {
      accountId: userCurrentInfo?.accountId,
      itemCode: values?.itemConfig?.itemCode || "",
      itemName: values?.itemConfig?.itemName || "",
      partNumber: values?.itemConfig?.partNumber || "",
      itemTypeId: values?.itemConfig?.itemType?.value || 0,
      itemCategoryId: values?.itemConfig?.category?.value || 0,
      itemSubCategoryId: values?.itemConfig?.subCategory?.value || 211,
      uom: values?.itemConfig?.uom?.value || 0,
      actionBy: userCurrentInfo?.userId,
    },
    businessUnitList: values?.businessUnitList || []

  };
  return payload;
};

//Landing Api Call
export const getList = (
  userCurrentInfo,
  pageNo,
  pageSize,
  setter,
  setLoading,
  searchTerm
) => {
  setLoading(true);
  httpClient
    .getData(
      // `https://demoerpm.ibos.io/domain/ItemBasicInfo/GetLandingPasignation?accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&pageNo=${pageNo}&pageSize=${pageSize}`
      `/domain/ItemBasicInfo/GetLandingPasignation?searchTerm=${searchTerm}&accountId=${userCurrentInfo?.accountId}&viewOrder=desc&pageNo=${pageNo}&pageSize=${pageSize}`
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
  userCurrentInfo,
  formik,
  populateTable,
  formData,
  setFormData,
  onClickClose,
  setLoading
) => {
  onClickClose()
  setLoading(true)
  const obj = updatePayloadChange(values, userCurrentInfo);
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
const updatePayloadChange = (values, userCurrentInfo) => {
  // console.log(values);
  const payload = {
    accountId: 0,
    actionBy: userCurrentInfo?.userId,
    itemId: values?.itemId,
    itemCode: values?.itemCode || "",
    itemName: values?.itemName || "",
    partNumber: values?.partNumber || "",
    uomId: values?.uom?.value,
    itemTypeId: values?.itemType?.value || 0,
    itemCategoryId: values?.category?.value || 0,
    itemSubCategoryId: values?.subCategory?.value || 0,

    //   "itemId": 0,
    //   "itemCode": "string",
    //   "itemName": "string",
    //   "partNumber": "string",
    //   "itemTypeId": 0,
    //   "itemCategoryId": 0,
    //   "itemSubCategoryId": 0,
    //   "uomId": 0,
    //   "actionBy": 0
  };

  return payload;
};

// Item Type Drop Down List
export const getItemTypeDropdownList = (setter) => {
  httpClient
    .getData("/domain/ItemType/GetList")
    .then((res) => {
      setter(res?.data);
    })
    .catch((error) => {
      setter([]);
      console.log("Error", error?.message);
    });
};

// Item Category Drop Down List
export const getItemCategoryDropdownList = (
  userCurrentInfo,
  itemTypeId,
  setter
) => {
  httpClient
    .getData(
      `/domain/ItemCategory/GetListByItemType?accountId=${userCurrentInfo?.accountId}&itemTypeId=${itemTypeId}`
    )
    .then((res) => {
      const newData = res?.data?.map((item) => ({
        value: item?.itemCategoryId,
        label: item?.itemCategoryName,
      }));
      setter(newData);
      // console.log(newData);
    })
    .catch((error) => {
      setter([]);
      console.log("Error", error?.message);
    });
};

// Item Sub Category Drop Down List
export const getItemSubCategoryDropdownList = (
  userCurrentInfo,
  itemCategoryId,
  setter
) => {
  httpClient
    .getData(
      `/domain/ItemSubCategory/GetListByItemCategory?accountId=${userCurrentInfo?.accountId}&itemCategoryId=${itemCategoryId}`
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
export const getUomDropdownList = (setter) => {
  httpClient
    .getData(`/domain/DDL/GetUOMDDL`)
    .then((res) => {
      setter(res?.data);
    })
    .catch((error) => {
      setter([]);
      console.log("Error", error?.message);
    });
};
export const getBusinessDropDownList = (userCurrentInfo, setter) => {
  httpClient
    .getData(`/domain/BusinessUnit/GetListByAccountId/${userCurrentInfo.accountId}`)
    .then((res) => {
      res?.data?.forEach(item => {
        item['value'] = item?.businessUnitId;
        item['label'] = item?.businessUnitName;
      });
      setter(res?.data);
    })
    .catch((error) => {
      setter([]);
      console.log("Error", error?.message);
    });
};


export const getItemById = (id, setter) => {
  httpClient
    .getData(`/domain/ItemBasicInfo/GetById/${id}`)
    .then((res) => {
      res.data['itemConfig'] = res?.data['itemBasic']
      res.data['itemConfig']['itemType'] = {
        label: res?.data['itemBasic']['itemTypeName'],
        value: res?.data['itemBasic']['itemTypeId']
      }
      res.data['itemConfig']['category'] = {
        label: res?.data['itemBasic']['itemCategoryName'],
        value: res?.data['itemBasic']['itemCategoryId']
      }
      res.data['itemConfig']['subCategory'] = {
        label: res?.data['itemBasic']['itemSubCategoryName'],
        value: res?.data['itemBasic']['itemSubCategoryId']
      }

      setter(res?.data);
    })
    .catch((error) => {
      setter([]);
      console.log("Error", error?.message);
    });
}
