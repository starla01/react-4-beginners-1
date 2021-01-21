//Librerias
import React from "react";

//Estilos
import styles from "./index.module.sass";

/**
 * @name Nav
 * @description Componente para renderizar el menu del Header de la aplicación
 * @example
 *
 *          <Nav />
 *
 * @returns {React.Component}
 **/

function Nav({ children }) {
  return <div className={styles.nav}>{children}</div>;
}

export default Nav;
