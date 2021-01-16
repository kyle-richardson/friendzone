import axios from "axios";
// axios.defaults.withCredentials = true;

export const axiosWithBaseURL = () =>
  axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    withCredentials: true
  });
