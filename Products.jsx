import { useState } from "react";
import { Navigate } from "react-router-dom";
import ProductData from "../ProductData";
import "./Products.css";

function Products() {

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const products = ProductData();

  const [category, setCategory] =
    useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === category
        );

  return (
    <div className="products-container">

      <h1>Our Products</h1>

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="All">All</option>

        <option value="Electronics">
          Electronics
        </option>

        <option value="Fashion">
          Fashion
        </option>

      </select>

      <div className="products-grid">

        {filteredProducts.map((product) => (
          <div
            className="product-card"
            key={product.id}
          >

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <p>{product.price}</p>

            <p>{product.category}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;