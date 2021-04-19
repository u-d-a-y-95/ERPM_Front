import httpClient from "../../../services/http/http-client";

//Item Category Create Api Binding
export const createItemCategory = (values, formik, populateTable) => {
  const obj = createPayloadChange(values);
  httpClient
    .postData("https://demoerpm.ibos.io/domain/ItemCategory/Create", obj)
    .then((res) => {
      formik.resetForm();
      populateTable();
    });
};

//Create Payload Change
const createPayloadChange = (values) => {
  // console.log(values)
  const payload = {
    sl: values.sl,
    itemCategory: values.itemCategoryId
      ? { value: values.itemCategoryId, label: values.itemCategoryName }
      : "",
    accountId: 1,
    businessUnitId: values.businessUnitId || 0,
    itemType: values.itemTypeId
    ? { value: values.itemTypeId, label: values.itemTypeName }
    : 0,
    actionBy: 1234,
  };
  return payload;
};

//Item Category Landing API Binding
export const getList = (
  accId,
  pageNo,
  pageSize,
  setter,
  businessUnitId,
  searchTerm
) => {
  httpClient
    .getData(
      `https://demoerpm.ibos.io/domain/ItemCategory/GetListPagination?accountId=${accId}&businessUnitId=${businessUnitId}&pageNo=${pageNo}&pageSize=${pageSize}&viewOrder=desc`
    )
    .then((res) => {
      setter(res?.data);
    })
    .catch((error) => {
      // setter([]);
      console.log("Error: ", error?.message);
    });
};

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
import httpClient from "../../../services/http/http-client"

export const createItemCategory = (payload, formik, populateTable) => {
    const obj = createPayloadChange(payload);
    httpClient.postData('https://jsonplaceholder.typicode.com/user', obj)
        .then(res => {

            formik.resetForm();
            populateTable()
        })

}
export const getList = (setData) => {
    httpClient.getData('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setData(res.data)
        })

}

const createPayloadChange = (payload) => {
    return payload
}
