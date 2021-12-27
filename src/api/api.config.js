import axios from "axios";

const getAccessToken = () => {
  const localStore = localStorage.getItem("persist:root");
  if (!localStore) {
    return "";
  }
  const user = JSON.parse(localStore)?.user;
  return JSON.parse(user)?.userInfo?.accessToken || "";
};

const getApiConfig = () =>
  axios.create({
    // baseURL: "https://vaidhyamitrabackend.herokuapp.com", // PROD
    baseURL: "https://pesto-vaidhyamitra.herokuapp.com/", // STAGING
    headers: {
      "x-access-token": getAccessToken(),
    },
  });

export default getApiConfig;
