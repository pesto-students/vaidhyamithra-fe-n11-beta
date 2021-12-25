import getApiConfig from "../api.config";

export const searchApi = async ({ searchText, pageNumber, pageSize }) => {
  const { data } = await getApiConfig().post("/search", {
    searchText,
    pageNumber,
    pageSize,
  });
  return data;
};

export const searchTopicsApi = async ({ tagName }) => {
  const { data } = await getApiConfig().post("/getTagsBySearchText", {
    tagName,
  });
  return data;
};
