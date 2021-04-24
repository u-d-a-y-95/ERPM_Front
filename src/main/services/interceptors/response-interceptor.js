import axios from 'axios'
import { toast } from 'react-toastify'

axios.interceptors.response.use(responesData, errorResponse);


function responesData(response) {
    return response
}

function errorResponse(error) {
    if (error.response) {
        // toast.warn(error.response.data.message)
    }
    return Promise.reject(error);
}