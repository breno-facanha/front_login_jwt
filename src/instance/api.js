import axios from "axios";

const instance = axios.create({
  baseURL: 'http://192.168.20.65:3200/',
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    
    if (token) {
    config.headers.Authorization = token;
  }
  return config;      
})

export default instance;