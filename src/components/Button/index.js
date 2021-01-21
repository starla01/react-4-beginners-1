//Librerias
import React from "react";

//Estilos
import styles from "./index.module.sass";

/**
 * @name Button
 * @description Componente para renderziar un boton o un Link segun el type
 *
 * @param {type} props.type props del tipo de componente button|link
 * @param {function} props.callback funcion que ejecutara en el evento click del boton
 * @param {string} props.target atributo para type link, este abre una nueva pestaña o sobre la misma
 * @param {string} props.url url a lacual redigira en caso de que el type sea Link
 * @param {Node} props.children Texto a renderizar
 * @param {string} props.classname Clase custom (sass) para estilizar el componente
 *
 * @example
 *
 *          <Button type="button" callback={function}>
 *            visita nuestro sitios de corebiz
 *          </Button>
 *
 *          <Button type="link" url="https://www.corebiz.ag" target="_blank">
 *            visita nuestro sitios de corebiz
 *          </Button>
 *
 * @returns {React.Component}
 **/

function Button({ callback, href, target, children, classname, type }) {
  return (
    (type === "button" && (
      <button onClick={callback} className={`${classname} ${styles.ctaButton}`}>
        {children}
      </button>
    )) || (
      <a
        href={href}
        target={target}
        className={`c-base ${classname} ${styles.ctaLink}`}
      >
        {children}
      </a>
    )
  );
}

export default Button;
