// import axios from 'axios';
// import baseConfig from '@/config';
// // import { getQueryParam } from './index';

// const http = axios.create({
//     baseURL: baseConfig.BASE_URL, // baseURL
//     headers: {
//         Authorization: baseConfig.TOKEN,
//     },
//     withCredentials: false, // 跨域请求时是否需要使用凭证
// });

// // request 拦截器
// http.interceptors.request.use(
//     config => {
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

// // response 拦截器
// http.interceptors.response.use(
//     (config: AxiosRequestConfig) => {
//       if (!baseConfig.TOKEN) {
//         if (process.env.NODE_ENV !== 'production') {
//           console.error('没有token');
//         }
//         return Promise.reject(new Error('用户失效'));
//       }
//       let reqUrl: any = config.url || '';
//       const localHost = parser.getLocalHost(reqUrl);
//       if (localHost) {
//         reqUrl = replaceHost(reqUrl, localHost);
//       }
//       config.url = reqUrl;
//       return config;
//     },
//     (error: AxiosError) => Promise.reject(error)
//   );

// export default http;
