import { ProductData, ProductsData } from "@/schema/products.schema";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.ballang.yoojinyoung.com",
  withCredentials: true,
});

async function getProducts() {
  const response = await apiClient.get<ProductsData>("/products");
  const products = response.data;
  return products;
}

async function getProduct(productId: string | string[]) {
  const response = await apiClient.get<ProductData>(`/products/${productId}`);
  const product = response.data;
  return product;
}

const productsAPI = {
  getProducts,
  getProduct,
};

export default productsAPI;
