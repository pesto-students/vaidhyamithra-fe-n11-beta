import axios from "axios";

export default axios.create({
  // baseURL: "https://vaidhyamitrabackend.herokuapp.com", // PROD
  baseURL: "https://pesto-vaidhyamitra.herokuapp.com/", // STAGING
});
