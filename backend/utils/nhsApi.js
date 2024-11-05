const axios = require("axios");
const { NHS_API_BASE_URL } = require("../constants/apiConstants");

const nhsApi = axios.create({
  baseURL: NHS_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": process.env.NHS_API_PRIMARY_KEY,
  },
});

module.exports = nhsApi;
