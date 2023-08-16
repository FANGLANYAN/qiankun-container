import axios, { AxiosError, AxiosResponse } from "axios";
import NProgress from "nprogress";
import { message as $message } from "antd";

import { getToken } from "./common";

//不显示loading
NProgress.settings.showSpinner = false;

declare module "axios" {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
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
instance.interceptors.request.use(
  function (config) {
    let token = getToken();
    NProgress.start();
    if (token) {
      config.headers["Authorization"] = token;
    }
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    const { status, data } = response;
    NProgress.done();
    switch (status) {
      case 200:
        return Promise.resolve(data);
      default:
        return Promise.resolve(response);
    }
  },
  function ({ response }) {
    const {
      data: { code, message },
    } = response;
    NProgress.done();
    switch (code) {
      default:
        $message.error(message || "服务器异常");
        return Promise.resolve(response.data);
    }
  }
);

export default instance;
