import axios from 'axios';

let API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

export default API;