import httpClient from "../../../services/http/http-client";

//Create Api Call
export const createItemProfile = (values, formik, populateTable) => {
  const obj = createPayloadChange(values);
  httpClient
    .postData("https://demoerpm.ibos.io/domain/ItemBasicInfo/Create", obj)
    .then((res) => {
      formik.setValues(null);
      formik.resetForm();
      populateTable();
    })
    .catch((error) => {
      console.log("Error: ", error?.message);
    });
};

//create payload change
const createPayloadChange = (values) => {
  console.log(values)
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


// itemCode:"string"
// itemName:"string"
// partNumber:"string"
// itemTypeId: 0
// itemCategoryId: 0
// itemSubCategoryId: 0
// uom: 0
  };
  return payload;
};

//Landing Api Call
export const getList = (accId, businessUnitId, pageNo, pageSize, setter) => {
  httpClient
    .getData(
      `https://demoerpm.ibos.io/domain/ItemBasicInfo/GetLandingPasignation?accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=dsce&pageNo=${pageNo}&pageSize=${pageSize}`
    )
    .then((res) => {
      setter(res?.data?.data);
      // console.log(res.data.data)
      // const values = getPayloadChange(res?.data?.data);
      // setter(values && values);
    })
    .catch((error) => {
      console.log("Error: ", error?.message);
    });
};

// Get Payload Change 
const getPayloadChange = (values) => {
  console.log(values)
  return values?.map((data) => ({
    sl: data?.sl,
    itemName: data?.itemName,
    itemCategoryId: data?.itemCategoryId,
    itemCategoryName: data?.itemCategoryName,
    itemCode: data?.itemCode,
    itemSubCategoryId: data?.itemSubCategoryId,
    itemSubCategoryName: data?.itemSubCategoryName,
    itemTypeId: data?.itemTypeId,
    itemTypeName: data?.itemTypeName,

    // accountId: data?.accountId,
    // billingName: data?.billingName,
    // billingAddress: data?.billingAddress,
    // bin: data?.bin,
    // businessUnitId: data?.businessUnitId,
    // contactNumber: data?.contactNumber,
    // customerAddress: data?.customerAddress,
    // customerCode: data?.customerCode,
    // customerId: data?.customerId,
    // address: data?.customerAddress,
    // customerName: data?.customerName,
    // customerTypeName: data?.customerTypeName,
    // customerTypeId: data?.customerTypeId,
    // nid: data?.nid,
    // licenseNo: data?.licenseNo,
    // customerEmail: data?.email,
    // sl: data?.sl,
  }));
};

//update Item Profile
export const updateItemProfile = (values, formik, populateTable, setUpdateFormData) => {
  const obj = updatePayloadChange(values);
  httpClient
    .putData("https://demoerpm.ibos.io/domain/ItemBasicInfo/Update", obj)
    .then((res) => {
      setUpdateFormData(null);
      formik.resetForm();
      populateTable();
    });
};

// Update Payload Change
const updatePayloadChange = (values) => {
  console.log(values)
  const payload = {
    itemCode: values?.itemCode || "",
    itemName: values?.itemName || "",
    // partNumber: values?.partNumber || "",
    itemTypeName: values?.itemType || +0,
    itemCategoryName: values?.itemCategoryName || +0,
    itemSubCategoryName: values?.itemSubCategoryName || +0,

    // itemCode: values?.code || "",
    // itemName: values?.itemName || "",
    // partNumber: values?.partNumber || "",
    // itemTypeId: values?.itemType?.value || +0,
    // itemCategoryId: values?.category?.value || +0,
    // itemSubCategoryId: values?.subCategory?.value || +0,
    // uom: values?.uom?.value || +0,
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
