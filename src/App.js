//Librerias
import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory, useLocation } from "react-router-dom";
import darkModeStyles from "./styles/dark-mode";
import lightModeStyles from "./styles/light-mode";
import generator from "corex-theme-generator/runtime";

//Estilos
import "./App.css";

//Componentes
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Chat from "./views/Chat";

function App() {
  const [css, setCss] = useState("");
  const [isLightMode, setIsLightMode] = useState(localStorage.theme === "true");

  function searching(e) {
    console.log(e.target.value);
  }

  useEffect(() => {
    generator((isLightMode && lightModeStyles) || darkModeStyles)
      .generate()
      .then((css) => setCss(css));
  }, [isLightMode]);

  return (
    <div className={`bg-secondary-back app`}>
      <style>{css}</style>
      <Header searching={searching} setIsLightMode={setIsLightMode} isLightMode={isLightMode} />

      <Switch>
        <Route
          path="/chat"
          render={(props) => {
            return <Chat />;
          }}
        />

        <Route
          path="/"
          render={(props) => {
            return <ProductList />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
