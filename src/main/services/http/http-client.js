import axios from 'axios'


function getData(url) {
    return axios.excuteHttpRequest(url, 'get')
}
function postData(url, payload) {
    return axios.excuteHttpRequest(url, 'post', payload)
}
function putData(url, payload) {
    return axios.excuteHttpRequest(url, 'put', payload)
}
function deleteDta(url, payload) {
    return axios.excuteHttpRequest(url, 'delete', payload)
}


function excuteHttpRequest(url, method, payload) {
    return axios({
        method: method,
        url: url,
        data: method !== 'get' ? payload : null
    });
}

export default {
    getData,
    postData,
    putData,
    deleteDta
}


// ibos/customer/getList [{}]
// ibos/product/getByIds []
