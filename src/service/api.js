import axios from "axios";

const api = axios.create({
    baseURL: ` https://api.trackmyroof.com/api/`,
    withCredentials: false,
  });

  api.interceptors.request.use((request) => {
    if (request.headers)
      request.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
  
    return request;
  });

  export default api;