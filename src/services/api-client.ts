import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b1843e1a9a204d5b82e829ae19b13b83",
  },
});
