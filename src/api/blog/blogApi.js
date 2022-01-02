import getApiConfig from "../api.config";

export const createBlogApi = async ({
  title,
  content,
  tags,
  authorId,
  status,
  description,
  imgUrl,
}) => {
  const { data } = await getApiConfig().post("/blog", {
    title,
    content,
    tags,
    authorId,
    status,
    description,
    imgUrl,
  });
  return data;
};

export const updateBlogApi = async ({
  blogId,
  title,
  content,
  tags,
  authorId,
  status,
  description,
  imgUrl,
}) => {
  const { data } = await getApiConfig().put(`/blog/${blogId}`, {
    title,
    content,
    tags,
    authorId,
    status,
    description,
    imgUrl,
  });
  return data;
};

export const getBlogApi = async ({ blogId }) => {
  const { data } = await getApiConfig().get(`/blog/${blogId}`);
  return data;
};

export const getLatestBlogsApi = async ({ pageNumber, pageSize }) => {
  const { data } = await getApiConfig().post("/getLatestBlogs", {
    pageNumber,
    pageSize,
  });
  return data;
};

export const getBlogsByTagsApi = async ({ tags }) => {
  const { data } = await getApiConfig().post(`/blogsByTags`, { tags });
  return data;
};

export const saveBookmarkApi = async ({ userId, blogId }) => {
  const { data } = await getApiConfig().post(`/saveBookMark`, {
    userId,
    blogId,
  });
  return data;
};

export const deleteBookmarkApi = async ({ userId, blogId }) => {
  const { data } = await getApiConfig().post(`/deleteBookMark`, {
    userId,
    blogId,
  });
  return data;
};
