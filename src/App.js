import React, { useState } from "react";
import "./App.css";
import freecodecampLogo from "./img/logo-frecodecamp.jpg";
import Pantalla from "./components/Pantalla";
import Boton from "./components/Boton";
import BotonClear from "./components/BotonClear";

import { evaluate } from "mathjs"; // para evaluar la expresión matematica
// ----
const App = () => {
  // Estado
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    if (
      (input.slice(-1) === "+" && val === "+") ||
      (input.slice(-1) === "-" && val === "-") ||
      (input.slice(-1) === "*" && val === "*") ||
      (input.slice(-1) === "/" && val === "/")
    ) {
      setInput(input.slice(0, -1) + val);
      return;
    }
    setInput(input + val);
  };

  const operar = () => {
    if (input) {
      setInput(evaluate(input));
    }
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (input) {
        setInput(evaluate(input));
      }
    }
    if (e.key === "Delete" || e.key === "Backspace") {
      setInput("");
    }
    if (
      !isNaN(e.key) ||
      e.key === "+" ||
      e.key === "-" ||
      e.key === "*" ||
      e.key === "/"
    ) {
      agregarInput(e.key);
    }
    return;
  });

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freecodecampLogo}
          className="freecodecamp-logo"
          alt="Logo freeCodeCamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />

        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={operar}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear clear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
};

export default App;
