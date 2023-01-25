import React from "react";
import "../hojasDeEstilo/cabezera.css";

export function Cabezera(props) {
  return (
    <div className="contenedorMenu">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ivan-navas-0990021a6?lipi=urn%3Ali%3Apage%3Ad_UNKNOWN_ROUTE_profile-edit.topcard%3B0up6QZfCQkmXwcWK9U%2FMkA%3D%3D"
        className="linkcontacto"
      >
        <img
          className="imagenContacto"
          src={require(`../imagenes/contacto/${props.contacto1}.svg`)}
          alt="Imagen Linkedin"
        />
      </a>
      <a
        target="_blank"
        href="https://github.com/Ivan-Navas"
        className="linkcontacto"
      >
        <img
          className="imagenContacto"
          src={require(`../imagenes/contacto/${props.contacto2}.svg`)}
          alt="Imagen Githup"
        />
      </a>
      <a
        target="_blank"
        href="https://wa.me/573136191589?text=Hola,%20necesito%20contactarte,%20por%20favor%20responde%20este%20mensaje%20lo%20mas%20pronto%20posible,%20quedo%20atento."
        className="linkcontacto"
      >
        <img
          className="imagenContacto"
          src={require(`../imagenes/contacto/${props.contacto3}.svg`)}
          alt="Imagen Whatsapp"
        />
      </a>
    </div>
  );
}
