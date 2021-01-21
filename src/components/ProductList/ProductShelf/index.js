//Librerias
import React from "react";

import Button from "../../Button";

//Estilos
import styles from "./index.module.sass";

/**
 * @name ProductShelf
 * @description Componente para renderziar product
 *
 *
 * @example
 *
 *          <ProductShelf data={product} />
 *
 * @returns {React.Component}
 **/

function ProductShelf({ data }) {
  const { name, longName, image, price, lastPrice } = data;

  return (
    <div className={`bg-main-color-back-light ${styles.product}`}>
      <img src={image} className={styles.imageProduct} alt={name} />
      <div className={styles.productInfo}>
        <p className={`c-main-color-text ${styles.name}`}>{name}</p>
        <p className={`c-base ${styles.longName}`}>{longName}</p>
        <p className={`c-base ${styles.lastPrice}`}>{lastPrice}</p>
        <p className={`c-base ${styles.price}`}>{price}</p>
        <Button type="button">Comprar</Button>
      </div>
    </div>
  );
}

export default ProductShelf;
