//Librerias
import React from "react";

//Estilos
import styles from "./index.module.sass";

/**
 * @name Search
 * @description Componente para renderizar el Search del header
 *
 * @example
 *
 *          <Search />
 *
 * @returns {React.Component}
 **/

function Search({ searching }) {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Busca algo..." onChange={searching} />
    </div>
  );
}

export default Search;
