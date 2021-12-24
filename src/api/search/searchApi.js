import apiConfig from "../api.config";

export const searchApi = async ({ searchText, pageNumber, pageSize }) => {
  const { data } = await apiConfig.post("/search", {
    searchText,
    pageNumber,
    pageSize,
  });
  return data;
};

export const searchTopicsApi = async ({ tagName }) => {
  const { data } = await apiConfig.post("/getTagsBySearchText", {
    tagName,
  });
  return data;
};
