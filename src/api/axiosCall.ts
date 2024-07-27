import axios from "axios";

const axiosCall = axios.create({
  // baseURL: "http://localhost/LBNewsServer/v1/", // Set your default base URL here
  baseURL: "https://api.static.onhome.ge/v1/", // Set your default base URL here
});
export const image_url_start = "https://api.static.onhome.ge/";
export default axiosCall;
// baseURL: "https://api.onhome.ge/v1/", // Set your default base URL here
