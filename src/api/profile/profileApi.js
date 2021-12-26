import getApiConfig from "../api.config";

export const getTagsByAuthorApi = async ({ authorId }) => {
  const { data } = await getApiConfig().get(`getTagsByAuthorId/${authorId}`);
  return data;
};

export const getSavedBlogsApi = async ({ userId }) => {
  const { data } = await getApiConfig().get(`getSavedBlogs/${userId}`);
  return data;
};
