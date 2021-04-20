import httpClient from "../../../services/http/http-client";

//Create Api Call
export const createItemProfile = (values, formik, populateTable) => {
  const obj = createPayloadChange(values);
  httpClient
    .postData("https://demoerpm.ibos.io/domain/ItemBasicInfo/Create", obj)
    // .postData("https://jsonplaceholder.typicode.com/users", obj)
    .then((res) => {
      formik.resetForm();
      populateTable();
    });
};

//Landing Api Call
export const getList = (setData) => {
  httpClient
    // .getData("https://demoerpm.ibos.io/domain/ItemBasicInfo/GetLandingPasignation")
    .getData("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      setData(res.data);
    });
};

//update Item Profile
export const updateItemProfile = (values, formik, populateTable) => {
  const obj = updatePayloadChange(values);
  httpClient
    .putData("https://demoerpm.ibos.io/domain/ItemBasicInfo/Update", obj)
    .then((res) => {
      formik.resetForm();
      populateTable();
    });
};

//create payload change
const createPayloadChange = (values) => {
  const payload = {
    accountId: 1,
    itemCode: values?.code || "",
    itemName: values.itemName || "",
    partNumber: values.partNumber || "",
    itemTypeId: values.itemType || 0,
    itemCategoryId: values.category || 0,
    itemSubCategoryId: values.subCategory || 0,
    uom: values.uom || 0,
    actionBy: 1234,
  };
  return payload;
};

const updatePayloadChange = (values) => {
  const payload = {
    accountId: 1,
    itemCode: values?.code || "",
    itemName: values.itemName || "",
    partNumber: values.partNumber || "",
    itemTypeId: values.itemTypeId || 0,
    itemCategoryId: values.category || 0,
    itemSubCategoryId: values.subCategory || 0,
    uom: values.uom || 0,
    actionBy: 1234,
    // "itemId": 0,
    // "itemCode": "string",
    // "itemName": "string",
    // "partNumber": "string",
    // "itemTypeId": 0,
    // "itemCategoryId": 0,
    // "itemSubCategoryId": 0,
    // "uom": 0,
    // "actionBy": 0
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
export const getItemCategoryDropdownListAction = (accId, businessId, setter) => {
  httpClient
    .getData(`https://demoerpm.ibos.io/domain/ItemCategory/GetList?accountId=${accId}&businessUnitId=${businessId}`)
    .then((res) => {
      setter(res?.data);
    })
    .catch((error) => {
      setter([]);
      console.log("Error", error?.message);
    });
};

// Item Sub Category Drop Down List
export const getItemSubCategoryDropdownListAction = (accId, businessId, setter) => {
  httpClient
    .getData(`https://demoerpm.ibos.io/domain/ItemSubCategory/GetList?accountId=${accId}&businessUnitId=${businessId}`)
    .then((res) => {
      setter(res?.data);
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