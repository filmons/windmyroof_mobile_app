import api from "./api";

export const getSites = async () => {
    return await api.get("/users");
  };