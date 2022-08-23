import axios from "axios";
// axios.defaults.withCredentials = true; 

export const api = axios.create({
  baseURL: "http://wetube-phenomenonlee.shop/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.defaults.withCredentials = true;

// api.interceptors.request.use(function (config) {
//   const accessToken = sessionStorage.getItem("token");
//   config.headers.common["authorization"] = `Bearer ${accessToken}`;
//   return config;
// });

