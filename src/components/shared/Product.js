import React from "react";
import { shorten } from "../../helpers/functions";
import { Link } from "react-router-dom";

export default function Product({ productData }) {
  return (
    <div>
      <img alt="product" src={productData.image} style={{ width: "200px" }} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`${productData.id}`}>Details</Link>
        <div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
