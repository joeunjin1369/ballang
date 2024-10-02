import { BrandProductData, BrandsData } from "@/schema/brands.schema";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.ballang.yoojinyoung.com",
  withCredentials: true,
});

async function getBrands() {
  const response = await apiClient.get<BrandsData>("/brands");
  const brands = response.data;
  return brands;
}

async function getBrand(brandId: string) {
  const response = await apiClient.get<BrandProductData>(`/brands/${brandId}`);
  const brand = response.data;
  return brand;
}

const brandsAPI = {
  getBrands,
  getBrand,
};

export default brandsAPI;
