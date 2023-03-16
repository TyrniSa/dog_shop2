import axios from "axios";

const BASE_URL = "http://localhost:8000/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY3ODk4NDEzMH0.79I3WrQ7QTBhSlCiCNKH2dVzdvRd2l8ecnuRHz_mrMM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});