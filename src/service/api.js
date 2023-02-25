import axios from "axios";

const url = {
  baseUrl: "https://apiprjfoodshop.000webhostapp.com/api/",
  meat: "/meat",
  plant: "/plant",
  rice_egg: "/rice_egg",
};

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use((response) => response);
instance.interceptors.response.use(
  (response) => response.data,
  (err) => {
    if (err.code === "ERR_NETWORK") {
      window.location.href = "/network-errors";
    } else {
      switch (err.reponse.status) {
        case 401:
          window.location.href = "/home";
          break;
        default:
          break;
      }
    }
    return Promise.reject(err);
  }
);

const api = {
  url,
  instance,
  get: instance.get,
  put: instance.put,
  post: instance.post,
  delete: instance.delete,
  patch: instance.patch,
};

export default api;
