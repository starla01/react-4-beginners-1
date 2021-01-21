//Librerias
import React from "react";

//Componentes
import ProductShelf from "./ProductShelf";

//Estilos
import styles from "./index.module.sass";

//Data
import productos from "../../data/products";

/**
 * @name ProductList
 * @description Componente para renderziar un listado de articulos
 *
 *
 * @example
 *
 *          <ProductList products={productgs} />
 *
 * @returns {React.Component}
 **/

function ProductList() {
  return (
    <div className={styles.productList}>
      {productos.map((product, key) => {
        return <ProductShelf key={key} data={product} />;
      })}
    </div>
  );
}

export default ProductList;
