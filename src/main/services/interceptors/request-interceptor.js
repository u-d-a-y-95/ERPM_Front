import axios from 'axios'
import lh from '../local-storage'
axios.defaults.baseURL = 'https://demoerpm.ibos.io/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

axios.interceptors.request.use(configRequest, errorRequest);


function configRequest(config) {
    console.log(config)
    if (config.url.split('/')[0] !== "identity") {
        config.headers['Authorization'] = `bearer ${lh.getData('user')['auth']['token']}`
        config.headers['Access-Control-Allow-Origin'] = '*'
        config.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
        config.headers['crossorigin'] = true

    }
    return config
}

function errorRequest(error) {
    return Promise.reject(error);
}