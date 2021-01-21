//Librerias
import React from "react";

//Estilos
import styles from "./index.module.sass";

/**
 * @name Logo
 * @description Componente para renderizar el Logo de la applicación
 *
 * @example
 *
 *          <Logo />
 *
 * @returns {React.Component}
 **/

function Logo({ image, alt }) {
  return (
    <div className={styles.logo}>
      <a href="/">
        <img src={image} alt={alt} />
      </a>
    </div>
  );
}

export default Logo;
