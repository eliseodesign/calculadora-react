import React from "react";
import "../style/Boton.css";

const Boton = (props) => {
  function esOperador(valor) {
    return isNaN(valor) && valor !== "." && valor !== "=";
  }

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => {
        props.manejarClick(props.children);
      }}
    >
      {props.children}
    </div>
  );
};

export default Boton;
