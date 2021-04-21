import axios from 'axios';
import "../interceptors/request-interceptor"

function getData(url) {
    return excuteHttpRequest(url, 'get')
}
function postData(url, payload) {
    return excuteHttpRequest(url, 'post', payload)
}
function putData(url, payload) {
    return excuteHttpRequest(url, 'put', payload)
}
function deleteData(url, payload) {
    return excuteHttpRequest(url, 'delete', payload)
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
    deleteData
}


// ibos/customer/getList [{}]
// ibos/product/getByIds []
