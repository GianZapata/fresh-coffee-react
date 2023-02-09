import axios from 'axios';

export const freshCoffeeApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export default freshCoffeeApi;
