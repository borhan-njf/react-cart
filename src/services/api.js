import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

//get all products
const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

//get single product
const getProduct = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};

export { getProducts, getProduct };
