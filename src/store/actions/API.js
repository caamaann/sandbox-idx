import axios from "axios";
import { LOCAL_STORAGE_KEY } from "../../utils/constants";

let user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "x-auth-token": user?.token || "" },
});

export default instance;
