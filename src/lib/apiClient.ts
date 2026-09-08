import { ofetch } from "ofetch";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

const apiClient = ofetch.create({
  baseURL: BASE_URL,

});

export default apiClient;