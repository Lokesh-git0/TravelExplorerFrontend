import axios from "axios";

const api = axios.create({
 baseURL: "https://travelexplorer-o3ed.onrender.com"
});

export default api;