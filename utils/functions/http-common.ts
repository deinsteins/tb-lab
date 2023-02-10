import axios from "axios";

export default axios.create({
  baseURL: "https://2ma9dk774g.execute-api.ap-southeast-2.amazonaws.com",
  headers: {
    "Content-type": "application/json"
  }
});
