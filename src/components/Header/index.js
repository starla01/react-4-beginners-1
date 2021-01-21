//Librerias
import React, { useState, useEffect } from "react";

//Componentes
import Logo from "./Logo";
import Search from "./Search";
import Nav from "./Nav";
import Button from "../Button";

//Hooks
import useVoice from "../../hooks/useVoice";

//Estilos
import styles from "./index.module.sass";

/**
 * @name Header
 * @description Modulo para renderizar el Header de la applicación
 *
 * @example
 *
 *          <Header />
 *
 * @returns {React.Component}
 **/

function Header({ searching, setIsLightMode, isLightMode }) {
  const voice = useVoice();
  useEffect(() => {
    const { phraseState } = voice;
  }, [voice.phraseState]);

  isLightMode && voice.phraseState === "night" && setIsLightMode(false);
  !isLightMode && voice.phraseState === "light" && setIsLightMode(true);

  return (
    <div className={styles.header}>
      <Logo
        image={
          (isLightMode && "/images/Logo_corebiz2020.png") ||
          "/images/Logo_corebiz2020-blanco.png"
        }
        alt="Corebiz"
      />
      <Search searching={searching} />
      <Nav>
        <Button href="/mi-cuenta" type="link">
          Mi cuenta
        </Button>
        <Button href="/mi-perfil" type="link">
          Mi Perfil
        </Button>
        <Button href="/mis-favoritos" type="link">
          Mis Favoritos
        </Button>
        <div
          className={styles.right}
          onClick={() => setIsLightMode(!isLightMode)}
        >
          <div id={styles.toggleTheme} className="bg-third-back">
            <div
              className={`bg-main-back ${styles.cirleButton} ${
                (isLightMode && styles.left) || styles.right
              }`}
            >
              {(isLightMode && (
                <span className={`material-icons c-base`}>wb_sunny</span>
              )) || (
                <span className={`material-icons c-base`}>nights_stay</span>
              )}
            </div>
          </div>
        </div>
      </Nav>
    </div>
  );
}

export default Header;
