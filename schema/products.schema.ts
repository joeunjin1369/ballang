export interface Product {
  id: number;
  brand: {
    id: number;
    nameKr: string;
    nameEn: string;
  };
  brandId: number;
  deliveryType: string;
  imgSrc: string;
  name: string;
  onlineStock: number;
  originalPrice: number;
  price: number;
}

export type Products = Product[];

export interface ProductsData {
  result: Products;
}

export interface ProductData {
  result: Product;
}