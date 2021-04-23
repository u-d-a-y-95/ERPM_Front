import httpClient from "../../../services/http/http-client";

export const createItemSubCategory = (values, formik, populateTable) => {
  const obj = createPayloadChange(values);
  httpClient
    .postData("https://demoerpm.ibos.io/domain/ItemSubCategory/Create", obj)
    .then((res) => {
      formik.setValues(null);
      formik.resetForm();
      populateTable();
    })
    .catch((error) => {
      console.log('Error: ', error.message)
    });
};


export const getList = (accId, businessUnitId, pageNo, pageSize, setter) => {
  httpClient
    .getData("https://demoerpm.ibos.io/domain/ItemSubCategory/GetListPagination?accountId=11&businessUnitId=1&pageNo=1&pageSize=1&viewOrder=1")
    .then((res) => {
      setter(res?.data?.data);
    })
    .catch((error) => {
      console.log("Error: ", error?.message);
    });
};

//create payload change
const createPayloadChange = (values) => {
  // console.log(values)
  const payload = {
    sl: +1,
    accountId: 1,
    actionBy: +1234,
    itemCategoryId: values.category.value || 0,
    itemCategoryName: values.category.label || "",   
    businessUnitId: values.businessUnit.value || 0,
    itemTypeId: values.itemType.value || 0,
    itemTypeName: values.itemType.label || "",
    itemSubCategoryId: values.subCategory.value || 0,
    itemSubCategoryName: values.subCategory.label || "",
    
    // sl: 0,
    // itemSubCategoryId: 0,
    // accountId: 0,
    // itemSubCategoryName:"string",
    // businessUnitId: 0,
    // itemTypeId: 0,
    // itemTypeName:"string",
    // itemCategoryId: 0,
    // itemCategoryName:"string",
    // actionBy: 0,
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
  setter
) => {
  httpClient
    .getData(
      `https://demoerpm.ibos.io/domain/ItemCategory/GetListByItemType?accountId=${accId}&businessUnitId=${businessId}&itemTypeId=1`
    )
    .then((res) => {
      setter(res?.data);
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
  setter
) => {
  httpClient
    .getData(
      `https://demoerpm.ibos.io/domain/ItemSubCategory/GetListByItemCategory?accountId=${accId}&businessUnitId=${businessId}&itemCategoryId=1`
    )
    .then((res) => {
      setter(res?.data);
    })
    .catch((error) => {
      setter([]);
      console.log("Error", error?.message);
    });
};