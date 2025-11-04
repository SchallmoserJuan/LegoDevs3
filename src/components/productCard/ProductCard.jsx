import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <h3>{product.name}</h3>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.pieces}>{product.pieces} piezas</p>
        <p className={styles.price}>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
