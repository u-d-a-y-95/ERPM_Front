import * as yup from "yup"

export const formsInitialValues = {
    businessUnit: "",
    subCategory : "",
    itemType: "",
    category: "",
}


export const tableConfig = {
    headers: [
        {
            key: "sl", label : 'SL'
        },
        {
            key: "subCategory", label: "Sub-Category"
        },
        {
            key: "itemType", label: "Item Type"
        },
        {
            key: "category", label: "Category"
        },
        {
            key: "businessUnit", label: "Business Unit"
        },
    ],
    isSearchable: true
}


export const formsValidationSchema = yup.object().shape({
    itemType: yup.string().required(),
    category: yup.string().required(),
    businessUnit: yup.string().required(),
    subCategory: yup.string().required(),
})


export const purchaseObject = values => {
    values['branchId'] = "1"
    return values;
}