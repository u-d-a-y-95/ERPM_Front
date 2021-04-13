import axios from 'axios'

axios.interceptors.response.use(responesData,errorResponse);


function responesData(response) {
    return response
}

function errorResponse(error) {
    return Promise.reject(error);
}