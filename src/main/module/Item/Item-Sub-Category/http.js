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

//create payload change
const createPayloadChange = (values) => {
  // console.log(values)
  const payload = {
    // sl: +1,
    accountId: 1,
    actionBy: +1234,
    itemCategoryId: values.category.value || 0,
    itemCategoryName: values.category.label || "",   
    businessUnitId: values.businessUnit.value || 0,
    itemTypeId: values.itemType.value || 0,
    itemTypeName: values.itemType.label || "",
    itemSubCategoryName: values.subCategory || 0,
    // itemSubCategoryName: values.subCategory.label || "",

  };
  return payload;
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



// Item Type Drop Down List
export const getItemTypeDropdownListAction = (setter) => {
  httpClient
    .getData("https://demoerpm.ibos.io/domain/ItemType/GetList")
    .then((res) => {
      console.log(res)
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