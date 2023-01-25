import React from "react";

import "../hojasDeEstilo/trabajos.css";
export function Trabajos(props) {
  return (
    <div className="contenedorTrabajo">
      <div className="trabajosp">
        <div className="contenedorTitulo">
        <h2 className="titulo2">Template para Restaurante</h2>
        </div>
        <div className="abajo">
          <a
            target="_blank"
            href="https://ivan-navas.github.io/Restaurante/"
            className="trabajo"
          >
            <img
              className="imagenTrabajo"
              src={require(`../imagenes/trabajos/${props.trabajo1}.png`)}
              alt="Imagen Trabajo1"
            />
          </a>
          <div className="tecnologiaUsada">
            <img
              className="logoTecnologiaUsada"
              src={require(`../imagenes/tecnologias/${props.tecnologia1}.svg`)}
              alt="HTML"
            />
            <img
              className="logoTecnologiaUsada"
              src={require(`../imagenes/tecnologias/${props.tecnologia2}.svg`)}
              alt="CSS"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
