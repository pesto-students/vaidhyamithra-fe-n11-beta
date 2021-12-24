import apiConfig from "../api.config";

export const createBlogApi = async () => {
  const { data } = await apiConfig.post("/create");
  return data;
};

export const getBlogApi = async ({ blogId }) => {
  const { data } = await apiConfig.get(`/blog/${blogId}`);
  return data;
};
