import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333"
})

api.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDQ1NDg5MzUsImV4cCI6MTcwNDYzNTMzNSwic3ViIjoiMSJ9.Q47o_s0weXeFAZyDcjs8INmnUPFAXUvwu1giblEj-sI"