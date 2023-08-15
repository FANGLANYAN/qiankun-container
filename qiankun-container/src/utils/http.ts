import axios, {  AxiosError, AxiosResponse } from 'axios';
// import { getToken, messageInstance } from './method';
// import { message, Modal } from 'antd';


export interface AxiosErrorresponse<T = any> extends AxiosError {
  response: AxiosResponse<T>;
}

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

let instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 15000,
  // headers: {
  //   // Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2Jhc2VfaWQiOiIzMTAyM3wxNjM2MTYzMjYzMjkzIn0.hqOO4B_H71UQl7N1TNyN7VLZpQKjeNIZnWlkzmkyQT8' //getToken()
  //   Authorization: getToken()
  // }
});

// 添加请求拦截器 拦截器要写在实例上 否则不生效
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  const {status,data} = response
switch(status){
  case 200:
  return Promise.resolve(data.result);
  default:
    return Promise.resolve(response);
}

}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance;
