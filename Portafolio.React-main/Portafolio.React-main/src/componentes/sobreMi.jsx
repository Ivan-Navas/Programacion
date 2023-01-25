import React from "react";
import '../hojasDeEstilo/sobreMi.css'
import imagen from '../imagenes/principales/inicio.png'
 export function SobreMi(props){
    return(
        <div className="contenedorPrincipal">
            <div className="contenedorInfo">
                <p className="info">{props.contenido}</p>
            </div>
            <div className="contenedorImagen">
                <img className="imagenPrincipal" 
                src={imagen}
                alt="Imagen pc" />
            </div>
        </div>
    );
}