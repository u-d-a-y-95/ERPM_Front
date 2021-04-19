import * as yup from "yup"

export const formsInitialValues = {
    code: "",
    itemName: "",
    itemType: "",
    category: "",
    subCategory: "",
    uom: "",
    partNumber: "",
}


export const tableConfig = {
    headers: [
        {
            key: "sl", label : 'SL'
        },
        {
            key: 'code', label: "Code"
        },
        {
            key: "itemName", label: "Item"
        },
        {
            key: "itemType", label: "Item Type"
        },
        {
            key: "category", label: "Category"
        },
        {
            key: "subCategory", label: "Sub-Category"
        },
        {
            key: "status", label : "Status"
        },
    ],
    isSearchable: true
}


export const formsValidationSchema = yup.object().shape({
    code: yup.string().required(),
    item: yup.string().required(),
    itemType: yup.string().required(),
    category: yup.string().required(),
    subCategory: yup.string().required(),
    uom: yup.string().required(),
    partNumber: yup.string().required(),
})


export const purchaseObject = values => {
    values['branchId'] = "1"
    return values;
}