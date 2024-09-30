import { BrandProductData, BrandsData } from "@/schema/brands.schema";
import axios from "axios";

const BASE_URL = "https://api.ballang.yoojinyoung.com";



async function getBrands() {
  const response = await axios.get<BrandsData>(`${BASE_URL}/brands`, {
    withCredentials: true,
  });
  const brands = response.data;
  return brands;
}

async function getBrand(brandId: string) {
  const response = await axios.get<BrandProductData>(
    `${BASE_URL}/brands/${brandId}`,
    {
      withCredentials: true,
    }
  );
  const brand = response.data;
  return brand;
}

const brandsAPI = {
  getBrands,
  getBrand,
};

export default brandsAPI;
