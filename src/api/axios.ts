import axios from "axios";
import { appId, baseUrl } from "./constants";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "X-Api-Factory-Application-Id": appId || "",
    "Content-Type": "application/json",
  },
});

export default api;
