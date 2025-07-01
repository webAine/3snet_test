import axios from 'axios';
import { type Data, type ApiResponseWrapper } from '../types/types';

const API_ENDPOINT_URL = 'https://3snet.co/js_test/api.json';

export const fetchData = async (): Promise<Data> => {
  try {
    const res = await axios.get<ApiResponseWrapper>(API_ENDPOINT_URL);

    if (res.data.success) {
      return res.data.data;
    } else {
      throw new Error('success false.');
    }
  } catch (error) {
    let errorMessage = 'Неизвестная ошибка при получении данных.';

    if (axios.isAxiosError(error)) {
      errorMessage = `Ошибка запроса: ${error.message}`;
      if (error.response?.status) {
        errorMessage += ` (Статус: ${error.response.status})`;
      }
    }

    console.error(errorMessage, error);
    throw new Error(errorMessage);
  }
};
