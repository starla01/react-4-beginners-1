import React from "react";
import styles from "./index.module.sass";

function Button({text}) {
  return <div className={styles.button}>{text}</div>;
}

export default Button;
