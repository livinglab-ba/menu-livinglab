import axios from "axios";

export const api = axios.create({
  baseURL: 'http://10.146.42.12:4040',
})