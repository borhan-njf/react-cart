import React, { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/api";

//context
export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await getProducts());
    };

    fetchApi();
  }, []);

  return (
    <div>
      <ProductContext.Provider value={products}>
        {children}
      </ProductContext.Provider>
    </div>
  );
}
