import axios from "axios";
// 54.180.113.36
//http://wetube-phenomenonlee.shop/
export const api = axios.create({
  baseURL: "http://wetube-phenomenonlee.shop/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

// api.defaults.withCredentials = true;

api.interceptors.request.use(function (config) {
  const accessToken = sessionStorage.getItem("token");
  console.log(accessToken)
  config.headers.common["authorization"] = `Bearer ${accessToken}`;
  return config;
});

