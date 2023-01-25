import React from "react";
import '../hojasDeEstilo/contacto.css'

export function Contacto(){
  return(
    <div className="contenedorContacto">
      
      <form  className="form" action="https://formspree.io/f/xwkzjrnv"
      method="POST">
        <h2>Contactame</h2>
        <input required type="text" name="name" placeholder="Nombre" className="datoContacto" />
        <input required type="email" name="email" placeholder="Correo" className="datoContacto" />
        <textarea required className="area" name="message" id="" placeholder="Mensaje"></textarea>
        <input className="enviar" type="submit"  value="Enviar" />
        
      </form>
    </div>
    );
}