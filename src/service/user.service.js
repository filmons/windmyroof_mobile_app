import api from "./api";

// export const signIn = async (
//     user: Omit<user, "access_token">
//   ): Promise<any> => {
//     return await api.post("patient/login", user);
//   };

  export const getByUser = async () => {
    return await api.get("/users");
  };