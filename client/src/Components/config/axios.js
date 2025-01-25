import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://evangadi-forum-backend-1-rvth.onrender.com/Api",
});

export default axiosBase;
