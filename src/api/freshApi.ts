import axios from 'axios';

export const freshCoffeeApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost',
});

export default freshCoffeeApi;
