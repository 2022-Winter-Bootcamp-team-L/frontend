import axios from 'axios';

const axiosCustom = axios.create({
  baseURL: 'http://localhost',
});

export default axiosCustom;