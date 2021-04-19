import * as yup from "yup"

export const formsInitialValues = {
    businessUnit: "",
    category: "",
    itemType: "",
}


export const tableConfig = {
    headers: [
        {
            key: "sl", label : 'SL'
        },
        {
            key: "category", label: "Category"
        },
        {
            key: "itemType", label: "Item Type"
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
})


export const purchaseObject = values => {
    values['branchId'] = "1"
    return values;
}