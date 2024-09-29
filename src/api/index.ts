import axios from "axios";
import WebApp from "@twa-dev/sdk";
const API_ENDPOINT =
  process.env.REACT_APP_API_ENDPOINT ||
  "https://5b29-89-110-108-206.ngrok-free.app/api";
// const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://127.0.0.1:9000/api';

const api = axios.create({
  // baseURL: 'https://your-backend-url.com/api',
  baseURL: API_ENDPOINT,
});

api.interceptors.request.use((config) => {
  try {
    // Добавляем строку initData в параметры запроса
    config.params = { ...config.params, initData: WebApp.initData };
  } catch (error) {
    console.error("Ошибка при добавлении строки initData:", error);
  }
  return config;
});

export default api;
