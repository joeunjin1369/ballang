import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.ballang.yoojinyoung.com",
  withCredentials: true,
});

async function signUp(email: string, password: string) {
  const response = await apiClient.post("/auth/sign-up", {
    email,
    password,
  });

  return response.data;
}

async function logIn(email: string, password: string) {
  const response = await apiClient.post("/auth/log-in", {
    email,
    password,
  });
  return response.data;
}

async function logOut() {
  await apiClient.delete("/auth/log-out");
}

async function accessToken() {
  const response = await apiClient.get("/auth/refresh-token");
  return response.data;
}

const authAPI = {
  signUp,
  logIn,
  logOut,
  accessToken,
};

export default authAPI;
