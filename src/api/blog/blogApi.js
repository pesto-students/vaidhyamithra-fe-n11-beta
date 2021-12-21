import apiConfig from "../api.config";

export const createBlogApi = async () => {
  const { data } = await apiConfig.post("/create");
  return data;
};
