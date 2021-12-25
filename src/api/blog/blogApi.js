import getApiConfig from "../api.config";

export const createBlogApi = async ({
  title,
  content,
  tags,
  authorId,
  status,
}) => {
  const { data } = await getApiConfig().post("/blog", {
    title,
    content,
    tags,
    authorId,
    status,
  });
  return data;
};

export const getBlogApi = async ({ blogId }) => {
  const { data } = await getApiConfig.get(`/blog/${blogId}`);
  return data;
};
