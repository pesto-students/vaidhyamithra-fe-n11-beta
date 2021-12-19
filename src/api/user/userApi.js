import apiConfig from "../api.config";

export const loginApi = async ({ email, password }) => {
  const { data } = await apiConfig.post("/login", { email, password });
  return data;
};
