import httpClient from "../../../services/http/http-client"

export const createItemSubCategory = (payload, formik, populateTable) => {
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