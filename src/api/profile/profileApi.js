import getApiConfig from "../api.config";

export const getTagsByAuthorApi = async ({ authorId }) => {
  const { data } = await getApiConfig().get(`getTagsByAuthorId/${authorId}`);
  return data;
};

export const getPublishedBlogsApi = async ({ userId }) => {
  const { data } = await getApiConfig().get(
    `blogsByAuthor/published/${userId}`
  );
  return data;
};

export const getProfileDetailsApi = async ({ userId }) => {
  const { data } = await getApiConfig().get(`getUserInfo/${userId}`);
  return data;
};
