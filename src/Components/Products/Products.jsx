import React from "react";
import "./Products.css";
import product1 from "../../Assets/product1.jpg";
import product2 from "../../Assets/product2.webp";

const Products = () => {
  return (
    <div className="products container">
      <h2>Our Products</h2>
      <div className="products-grid">
        <div className="products-item">
          <img src={product1} alt="Bamboo Socks" />
          <h3>Bamboo Socks</h3>
          <p>
            Ultra-soft, breathable, and moisture-wicking to prevent foot rot
            and irritation. Stay fresh all day!
          </p>
        </div>
        <div className="products-item">
          <img src={product2} alt="Citronella Oil" />
          <h3>Citronella Oil</h3>
          <p>
            A natural antibacterial and antifungal solution that fights foot
            odor and infections, leaving your feet refreshed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;