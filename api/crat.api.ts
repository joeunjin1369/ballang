import { CartData } from "@/schema/cart.schema";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.ballang.yoojinyoung.com",
  withCredentials: true,
});

async function getCart() {
  const response = await apiClient.get<CartData>("/cart");
  const cart = response.data;
  return cart.result;
}

async function addItemToCart(productId: string) {
  await apiClient.post(`/cart/products/${productId}`);
}

async function removeItemFromCart(productId: string) {
  await apiClient.delete(`/cart/products/${productId}`);
}
async function clearItemInCart(productId: string) {
  await apiClient.delete(`/cart/products/${productId}/clear`);
}

const cartAPI = {
  getCart,
  addItemToCart,
  removeItemFromCart,
  clearItemInCart,
};

export default cartAPI;
