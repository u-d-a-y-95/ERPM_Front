import * as yup from "yup"

export const formsInitialValues = {
    id: "",
    title: "",
    description: ""
}


export const tableConfig = {
    headers: [
        {
            key: 'id', label: "ID"
        },
        {
            key: "title", label: "Title"
        },
        {
            key: "body", label: "Details"
        },
    ],
    isSearchable: true
}


export const formsValidationSchema = yup.object().shape({
    id: yup.string().required(),
    title: yup.string().required()
})


export const purchaseObject = values => {
    values['branchId'] = "1"
    return values;
}