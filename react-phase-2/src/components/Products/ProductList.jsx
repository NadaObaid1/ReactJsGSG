import React from "react";
import "./Products.css";
export default function ProductList({ products }) {
  return (
    <>
      <section id="products">
        <div className="container">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Category:{product.category.toUpperCase()}</p>
              <p>{product.info}</p>
              <h4>${product.price}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
