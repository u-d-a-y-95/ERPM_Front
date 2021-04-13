import axios from 'axios'


axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(configRequest, errorRequest);


function configRequest(config) {
    return config
}

function errorRequest(error) {
    return Promise.reject(error);
}