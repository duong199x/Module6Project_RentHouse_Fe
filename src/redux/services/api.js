import axios from "axios";

const customAxios = axios.create({
    baseURL: 'http://localhost:8080/'
})
customAxios.interceptors.request.use(config => {
    const account = JSON.parse(localStorage.getItem("user"));
    if (account && account.accessToken){
        config.headers.Authorization = `Bearer ${account.accessToken}`;
    }
    return config;
})

export default customAxios;