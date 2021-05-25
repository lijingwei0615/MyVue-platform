import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://8.140.100.205:8090',
    timeout: 3000
});


export default instance;
