import axios from "axios";
const KEY = "AIzaSyA4dUyopu8AadmQwm_us7WzxVKJfIVF4bQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});