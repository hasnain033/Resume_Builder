import axios from "axios";

const url = "http://localhost:5000";

export const getTemplatesApi = () => {
  console.log("api");
  return axios.get(`${url}/getTemplates`);
};

export const getHtmlApi = (url) => {
  return axios.get(url);
};
