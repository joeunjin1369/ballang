import authAPI from "./auth.api";
import brandsAPI from "./brands.api";
import cartAPI from "./crat.api";
import productsAPI from "./products.api";

const api = {
  products: productsAPI,
  brands: brandsAPI,
  auth: authAPI,
  cart: cartAPI,
};

export default api;
