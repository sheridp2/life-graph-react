import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/",
  // baseURL: "https://react-memory-backend.herokuapp.com/",
});
