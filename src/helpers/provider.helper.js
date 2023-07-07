import axios from 'axios';

class HttpClientHelper {
  static baseHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'origin':'x-requested-with',
    'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
    // Authorization: apiKey
  };
}

axios.interceptors.request.use(
  config => {
    config.headers = Object.assign(config.headers, HttpClientHelper.baseHeaders);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const HttpClient = axios;

export default HttpClient;