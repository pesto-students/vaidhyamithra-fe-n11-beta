import getApiConfig from "../api.config";

export const loginApi = async ({ email, password }) => {
  const { data } = await getApiConfig().post("/login", { email, password });
  return data;
};

export const signupApi = async ({ name, email, password, isDoctor }) => {
  const { data } = await getApiConfig().post("/signup", {
    name,
    email,
    password,
    isDoctor,
  });
  return data;
};

export const updateUserInfoApi = async (userData) => {
  const { data } = await getApiConfig().put("/updateUserInfo", userData);
  return data;
};

export const getSavedBlogsApi = async ({ userId }) => {
  const { data } = await getApiConfig().get(`getSavedBlogs/${userId}`);
  return data;
};

export const getDraftBlogsApi = async ({ userId }) => {
  const { data } = await getApiConfig().get(`blogsByAuthor/draft/${userId}`);
  return data;
};
