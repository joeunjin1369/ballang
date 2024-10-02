import { Product } from "./products.schema";


export type CartItem = {
  cartId: number;
  createdAt: string;
  id: number;
  product: Product;
  productId: number;
  quantity: number;
  updatedAt: string;
};

type Cart = {
  id: number;
  items: CartItem[];
};

export interface CartData {
  result: Cart;
}
