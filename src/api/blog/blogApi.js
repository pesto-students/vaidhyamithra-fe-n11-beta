import apiConfig from "../api.config";

export const createBlogApi = async ({
  title,
  content,
  tags,
  authorId,
  status,
}) => {
  const { data } = await apiConfig.post("/blog", {
    title,
    content,
    tags,
    authorId,
    status,
  });
  return data;
};

export const getBlogApi = async ({ blogId }) => {
  const { data } = await apiConfig.get(`/blog/${blogId}`);
  return data;
};
