import React from "react";
import '../hojasDeEstilo/logo.css'

function Logo(props){
    return(
        <div className="contenedorLogo">
            <img className="logoImagen"
            src={require(`../imagenes/tecnologias/${props.imagen}.svg`)}
            alt={props.nombre} 
            title={props.nombre} />
        </div>
    );

}

export default Logo;