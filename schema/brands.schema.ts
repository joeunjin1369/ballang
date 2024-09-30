import { Product } from "./products.schema";

interface brand {
  id: number;
  nameEn: string;
  nameKr: string;
}

type Brands = brand[];

export interface BrandsData {
  result: Brands;
}

interface Products {
  id: number;
  nameEn: string;
  nameKr: string;
  products: Product[];
}

export interface BrandProductData {
  result: Products;
}