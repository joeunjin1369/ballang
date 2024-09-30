import { ProductData, ProductsData } from "@/schema/products.schema";
import axios from "axios";

const BASE_URL = "https://api.ballang.yoojinyoung.com";



async function getProducts() {
  const response = await axios.get<ProductsData>(`${BASE_URL}/products`, {
    withCredentials: true,
  });
  const products = response.data;
  return products;
}

async function getProduct(productId: string | string[]) {
  const response = await axios.get<ProductData>(`${BASE_URL}/products/${productId}`, {
    withCredentials: true,
  });
  const product = response.data;
  return product;
}

const productsAPI = {
  getProducts,
  getProduct,
};

export default productsAPI;
