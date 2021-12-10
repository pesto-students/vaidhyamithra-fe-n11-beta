import apiConfig from "../api.config";

export const loginApi = async ({ name, password }) => {
  const { data } = await apiConfig.post("/login", { name, password });
  return data;
};
