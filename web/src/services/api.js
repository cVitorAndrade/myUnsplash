import axios from "axios";

export const api = axios.create({
    baseURL: "https://my-unsplash-api-lyqn.onrender.com/"
})