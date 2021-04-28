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
    itemCategoryName: values.category || null,
    itemTypeId: values.itemType.value || null,
    itemTypeName: values.itemType.label || null,
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
  const payload = {
    accountId: userCurrentInfo?.accountId,
    itemTypeId: values?.itemType?.value || 0,
    itemCategoryId: values?.itemCategoryId,   
    itemCategoryName: values?.category || "",
    actionBy: userCurrentInfo?.userId,
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

    // accountId: userCurrentInfo?.accountId,
    // itemTypeId: changeData?.itemType?.value || 0,
    // itemCategoryId: changeData?.category?.value || 0,   
    // itemCategoryName: changeData?.category?.label || "",
    // actionBy: userCurrentInfo?.userId,

// Get By Id For Delete Api Call
// export const deleteItemCategory = (id, populateTable) => {
//   httpClient
//     .deleteData(`https://demoerpm.ibos.io/domain/ItemCategory/GetById/${id}`)
//     .then((res) => {
//       populateTable();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// Get By Id For Single Item Category Data View Api Call
// export const singleItemCategoryById = (id, setter) => {
//   httpClient
//     .getData(`https://demoerpm.ibos.io/domain/ItemCategory/GetById/${id}`)
//     .then((res) => {
//       setter(res?.data);
//     })
//     .catch((err) => {
//       console.log("Error: ", err?.message);
//     });
// };

// Get By Id For Single Item Category Data Edit Api Call
// export const singleItemCategoryEditById = (id, populateTable, setter) => {
//   httpClient
//     .getData(`https://demoerpm.ibos.io/domain/ItemCategory/GetById/${id}`)
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

// Get By Id Payload Change
// const getByIdPayloadChange = (values) => {
//   const payload = {
//     sl: values?.sl,
//     itemCategory: values?.itemCategoryId,
//     businessUnitId: values.businessUnit,
//     itemTypeId: values.itemType,

//     // accountId: 1,
//     // businessUnitId: 1,
//     // supplierTypeId: 3,
//     // actionBy: 0,
//   };
//   return payload;
// };

//Update Item Category Item Binding

// export const updateItemCategory = (values, formik, populateTable) => {
//   const obj = updatePayloadChange(values);
//   httpClient
//     .putData("https://demoerpm.ibos.io/domain/ItemCategory/Update", obj)
//     .then((res) => {
//       formik.resetForm();
//       populateTable();
//     });
// };

// Update Payload Change
// const updatePayloadChange = (values) => {
//   // console.log(values)
//   const payload = {
//     sl: values.sl,
//     itemCategory: values.itemCategoryId
//       ? { value: values.itemCategoryId, label: values.itemCategoryName }
//       : "",
//     accountId: 1,
//     businessUnitId: values.businessUnitId || 0,
//     itemTypeId: values.itemTypeId
//     ? { value: values.itemTypeId, label: values.itemTypeName }
//     : "",
//     actionBy: 1234,
//   };
//   return payload;
// };



