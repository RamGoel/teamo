import axios from 'axios';

let API = axios.create({
    baseURL: '/api'
})

export default API;