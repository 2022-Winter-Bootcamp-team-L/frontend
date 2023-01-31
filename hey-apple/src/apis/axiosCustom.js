import axios from 'axios';

const axiosCustom = axios.create({
  baseURL: 'http://svheyapple.com',
});

export default axiosCustom;