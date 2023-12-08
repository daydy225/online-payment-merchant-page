import { Axios } from '../utils/axios';

export const API = {
  // Verify token
  verifyToken: async (token) => {
    try {
      const res = await Axios.get(`verify-token-paiement/${token}`);
      return res.data;
    } catch (error) {
      throw new Error(error?.response?.data?.message || error?.message);
    }
  },

  getProvidersList: async () => {
    try {
      const res = await Axios.get('api/valsoria/list-providers');
      return res.data;
    } catch (error) {
      throw new Error(error?.response?.data?.message || error?.message);
    }
  },
};
