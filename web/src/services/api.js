import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333"
})

api.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDQ3MzM2NTAsImV4cCI6MTcwNDgyMDA1MCwic3ViIjoiMSJ9.9cl8lMD7FY386oBcSSm1sqV18LT1eq88eiWWgZStUV4"