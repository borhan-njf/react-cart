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

  const { image, title, description, price } = singleProduct;

  return (
    <div>
      <img alt="product" src={image} style={{ width: "300px" }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>price : {price}</p>
      <Link to={`/products`}>back to home</Link>
    </div>
  );
}
