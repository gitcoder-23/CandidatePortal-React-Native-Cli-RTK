import axios from 'axios';
import {BaseURL} from './config';
const rootApi = axios.create({
  baseURL: BaseURL,
});

let interceptor: any;

const resetInterceptor = (token: string) => {
  console.log('@@@[API CALLING WITH AUTH TOKEN: ', token);
  if (!interceptor) {
    axios.interceptors.request.eject(interceptor);
  }

  // Add reaquest interceptor
  interceptor = rootApi.interceptors.request.use((config: any) => {
    console.log('@@@[API CALLING WITH AUTH CONFIG: ', token);

    config.headers.Authorization = token ? `Bearer ${token}` : '';

    return config;
  });
};

export default rootApi;

export {resetInterceptor};
