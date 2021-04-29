import httpClient from "../../../../services/http/http-client";

//Create Api Call
export const createUser = (values, formik, populateTable) => {
  const obj = createPayloadChange(values);
  httpClient
    .postData("/domain/User/Create", obj)
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
  console.log(values);
  const payload = {
    accountId: 0,
    actionBy: 0,
    businessUnitId: 0,
    userName: values?.userName || "",
    loginId: values?.loginId || "",
    userType: 0,
  };
  return payload;
};

//Landing Api Call
export const getList = (accId, businessUnitId, pageNo, pageSize, setter) => {
  httpClient
    .getData(
      `/domain/ItemBasicInfo/GetLandingPasignation?accountId=${accId}&businessUnitId=${businessUnitId}&viewOrder=desc&pageNo=${pageNo}&pageSize=${pageSize}`
    )
    .then((res) => {
      setter(res?.data?.data);
    })
    .catch((error) => {
      console.log("Error: ", error?.message);
    });
};

// Get Payload Change
const getPayloadChange = (values) => {
  console.log(values);
  return values?.map((data) => ({
    sl: data?.sl,
    // uom: data?.uom?.value,
    partNumber: data?.value?.partNumber,
    itemName: data?.itemName,
    itemCategoryId: data?.itemCategoryId,
    itemCategoryName: data?.itemCategoryName,
    itemCode: data?.itemCode,
    itemSubCategoryId: data?.itemSubCategoryId,
    itemSubCategoryName: data?.itemSubCategoryName,
    itemTypeId: data?.itemTypeId,
    itemTypeName: data?.itemTypeName,
  }));
};

// Item UOM Drop Down List
export const getUserDropdownListAction = (setter) => {
  httpClient
    .getData(`/domain/UserType/GetList`)
    .then((res) => {
      setter(res?.data);
    })
    .catch((error) => {
      setter([]);
      console.log("Error", error?.message);
    });
};
