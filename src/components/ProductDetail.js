import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../services/api";

export default function ProductDetail() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setSingleProduct(await getProduct(id));
    };

    fetchApi();
  }, []);

  const { image, title, description, price, category } = singleProduct;

  return (
    <div>
      <img alt="product" src={image} style={{ width: "300px" }} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <span>Category: </span>
          {category}
        </p>
        <p>price : {price}000$</p>
        <Link to={`/products`}>back to products</Link>
      </div>
    </div>
  );
}
