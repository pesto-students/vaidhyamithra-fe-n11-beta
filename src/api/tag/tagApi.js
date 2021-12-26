import getApiConfig from "../api.config";

export const getAllTagsApi = async () => {
  const { data } = await getApiConfig().get("/getTags");
  return data;
};