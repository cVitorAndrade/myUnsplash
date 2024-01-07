import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333"
})

api.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDQ2MzU0NDAsImV4cCI6MTcwNDcyMTg0MCwic3ViIjoiMSJ9.3aMVwCLCIQL1i1qvupPAEXnAXgXlyxOzv6BVYs1pqnE"