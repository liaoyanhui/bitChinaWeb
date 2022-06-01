/*
 * @Description: 请求request
 * @Author: 尚夏
 * @Date: 2021-09-01 16:12:13
 * @LastEditTime: 2021-09-29 10:33:33
 * @FilePath: /bit-china/utils/request.ts
 */

import axiosStatic, { AxiosInstance, AxiosRequestConfig } from "axios";

// const codeMessage = {
//   200: '服务器成功返回请求的数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）。',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。',
// };

export const request = axiosStatic.create({
  // baseURL: "http://192.168.50.110/fil/admin/v1",
  // baseURL: "http://192.168.50.213:8080/fil/client/v1",
  // timeout: 5000,
  timeout: 60000,
});

request.interceptors.request.use(
  (config) => {
    let getToken = "";

    let authHeader: any = {
      "Content-Type": "application/json",
    };

    if (getToken) {
      authHeader = {
        ...authHeader,
      };
    }
    return {
      ...config,
      // headers: { ...authHeader },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response: any) => {
    if (!response.data) {
      // notification.error({
      //   description: "未知错误",
      //   message: "",
      // });
      return null;
    }
    if (response.data.code) {
      // notification.error({
      //   description: response.data.message,
      //   message: "",
      // });
      return null;
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
