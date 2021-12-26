import getApiConfig from "../api.config";

export const getTagsByAuthorApi = async ({ authorId }) => {
  const { data } = await getApiConfig().get(`getTagsByAuthorId/${authorId}`);
  return data;
};
