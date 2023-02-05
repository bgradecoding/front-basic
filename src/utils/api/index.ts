import axios from "axios";

type Params = {
  [key: string]: unknown;
};

export const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  get: <T>(url: string, params?: Params) => axios.get<T>(baseUrl + url, { params: { ...params } }),
  post: <T, R = unknown, E = unknown>(url: string, data?: R, headers?: E) =>
    axios.post<T>(baseUrl + url, data || {}, { ...headers }),
  put: <T, R = unknown>(url: string, data?: R) => axios.put<T>(baseUrl + url, data || {}),
  delete: <T>(url: string) => axios.delete<T>(baseUrl + url),
};

axios.interceptors.request.use(function (config: any) {
  config.headers = {
    //Authorization: "Bearer " + LocalStorage.getItem("token") || "",
  };
  return config;
});
