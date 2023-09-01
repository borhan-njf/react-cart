import React, { useContext } from "react";
//component
import Product from "./shared/Product";
//context
import { ProductContext } from "../context/ProductContextProvider";

export default function Store() {
  const products = useContext(ProductContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
}
