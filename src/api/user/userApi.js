import apiConfig from "../api.config";

export const loginApi = async ({ email, password }) => {
  const { data } = await apiConfig.post("/login", { email, password });
  return data;
};

export const signupApi = async ({ name, email, password, isDoctor }) => {
  const { data } = await apiConfig.post("/signup", {
    name,
    email,
    password,
    isDoctor,
  });
  return data;
};
