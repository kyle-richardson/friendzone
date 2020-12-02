import axios from "axios";
// axios.defaults.withCredentials = true;

export const axiosWithBaseURL = () =>
  axios.create({
    baseURL: "https://friendzone-backend.herokuapp.com/api",
    withCredentials: true
  });
