import axios from "axios";
import config from "../utils/config";

const baseClient = axios.create({
  baseURL: config.inventoryApiHost,
  headers: {
    'Accept': "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});
const inventoryAxiosClient = axios.create({
  baseURL: config.inventoryApiHost,
  headers: {
    'Accept': "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    'Authorization': "Bearer" + config.apiToken,
  },
});

export { baseClient, inventoryAxiosClient };
