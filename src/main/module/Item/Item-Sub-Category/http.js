import httpClient from "../../../services/http/http-client";
import { succesInsertMessage, succesUpdateMessage } from './../../../constant/message.constant';
import { toast } from "react-toastify";

export const createItemSubCategory = (
  values,
  formik,
  populateTable,
  onClickClose,
  setLoading) => {
  onClickClose();
  setLoading(true);
  const obj = createPayloadChange(values);
  httpClient
    .postData("/domain/ItemSubCategory/Create", obj)
    .then((res) => {
      formik.setValues(null);
      formik.resetForm();
      populateTable();
      setLoading(false);
      toast.success(succesInsertMessage);
    })
    .catch((error) => {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    });
};

//create payload change
const createPayloadChange = (values) => {
  console.log(values)
  const payload = {
    accountId: 1,
    itemSubCategoryName: values.subCategory || 0,    
    businessUnitId: 1,
    itemTypeId: 1,
    itemTypeName: values.itemType.label || "",    
    itemCategoryId: 1,
    itemCategoryName: values.category.label || "",
    actionBy: 0,
  };
  return payload;
};

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
    .getData(`https://demoerpm.ibos.io/domain/ItemSubCategory/GetListPagination?accountId=${accId}&businessUnitId=${businessUnitId}&pageNo=${pageNo}&pageSize=${pageSize}&viewOrder=desc`)
    .then((res) => {
      setter(res?.data?.data);
      setLoading(false);
    })
    .catch((error) => {
      setter([]);
      toast.error(error?.response?.data?.message);
    });
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
      `https://demoerpm.ibos.io/domain/ItemSubCategory/GetListByItemCategory?accountId=${accId}&businessUnitId=${businessId}&itemCategoryId=${itemTypeId}`
    )
    .then((res) => {
      const newData = res?.data?.map(item => (
        {
          value: item?.itemSubCategoryId,
          label: item?.itemSubCategoryName
        }
      ))
      setter(newData);
    })
    .catch((error) => {
      setter([]);
      console.log("Error", error?.message);
    });
};

//update Item Sub Category
export const updateItemSubCategory = (
  values, 
  formik, 
  populateTable, 
  setUpdateFormData) => {
    console.log(values)
  const obj = updatePayloadChange(values);
  httpClient
    .putData("/domain/ItemSubCategory/Update", obj)
    .then((res) => {
      setUpdateFormData(null);
      formik.resetForm();
      populateTable();
    })
    .catch((error) => {
      console.log('Error: ', error.message)
    });
};

// Update Payload Change
const updatePayloadChange = (values) => {
  console.log(values)
  const payload = {
    accountId: 1,
    itemSubCategoryName: values.subCategory || 0,    
    businessUnitId: 1,
    itemTypeId: 1,
    itemTypeName: values.itemType.label || "",    
    itemCategoryId: 1,
    itemCategoryName: values.category.label || "",
    actionBy: 0,
  };
//   sl: 0
// itemSubCategoryId: 0
// accountId: 0
// itemSubCategoryName:"string"
// businessUnitId: 0
// itemTypeId: 0
// itemTypeName:"string"
// itemCategoryId: 0
// itemCategoryName:"string"
// actionBy: 0

  return payload;
};

// export const getItemCategoryDropdownListAction = (
//   accId,
//   businessId,
//   setter
// ) => {
//   httpClient
//     .getData(
//       `https://demoerpm.ibos.io/domain/ItemCategory/GetListByItemType?accountId=${accId}&businessUnitId=${businessId}&itemTypeId=1`
//     )
//     .then((res) => {
//       setter(res?.data);
//     })
//     .catch((error) => {
//       setter([]);
//       console.log("Error", error?.message);
//     });
// };
