import axios from 'axios';

import { BASE_URL } from '../utils/config';

export const Axios = axios.create({
  baseURL: BASE_URL,
});

// Axios.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem('token');
//   config.withCredentials = true;
//   config.headers = {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   };

//   return config;
// });
