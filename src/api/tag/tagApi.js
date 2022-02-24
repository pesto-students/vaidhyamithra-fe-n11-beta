import getApiConfig from "../api.config";

export const getAllTagsApi = async () => {
  const { data } = await getApiConfig().get("/getTags");
  return data;
};

export const getLatestTagsApi = async () => {
  const { data } = await getApiConfig().get("/getLatestTags");
  return data;
};
