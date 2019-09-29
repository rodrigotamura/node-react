import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.71.177.44:3333',
  // baseURL: 'http://192.168.0.106:3000',
});

export default api;
