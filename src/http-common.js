import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3220",
  headers: {
    "Content-type": "application/json"
  }
});
