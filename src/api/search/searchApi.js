import apiConfig from "../api.config";

export const searchApi = async ({ searchText, pageNumber, pageSize }) => {
  const { data } = await apiConfig.post("/search", {
    searchText,
    pageNumber,
    pageSize,
  });
  return data;
};
