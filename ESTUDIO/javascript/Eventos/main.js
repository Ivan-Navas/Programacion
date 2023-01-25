const boton = document.querySelector(".boton");//*se selecicona el elemento html
boton.addEventListener("click",saludar);//*se agrega un eventListener, que sera quien verifique cuando hay un click, ejecurara la funcion(no permite funciones flecha)
function saludar(){//*Funcion para saludar
    alert("Hola");//*Alerta que se mostrara al presionar el boton
    boton.removeEventListener("click",saludar);//*Se elimina el eventListner
}
boton.addEventListener("click",(e)=>{
    console.log(e.target);//*Muestra el evento al que se le está aplicando el evento
})
//? el fulujo fe eventos quiere decir el orden en el que se ejecutan los eventos, por defecto, se ejecunta primero loseventos del hijo, se crea un evento para que al dar click en un div muetra un alert, y dentro de el div hay un boton que hará lo mismo, primero se ejecutara el alert del hijo y luego el del padre(El del padre se ejecuta porque al eltar el boton dentro del div, cuenta como si se ubiese presionado en el div)
const contenedor1 = document.querySelector(".contenedor1");
const contenedor2 = document.querySelector(".contenedor2");
const boton2 = document.querySelector(".boton2");
contenedor2.addEventListener("click",(e)=>{
    alert("Presionaste el contenedor2")
},true)//*Si se leagrega true será el primero en ejecutar, aunque sea el padre 

contenedor1.addEventListener("click",(e)=>{
    alert("Pesionaste el contenedor1");
});
boton2.addEventListener("click",(e)=>{
    alert("Presionaste el boton 2");
    e.stopImmediatePropagation();//*Hace que despues de ejecutarse no se ejecu¿ten los otros eventos del contenedor
});
boton2.addEventListener("click",(e)=>{//*cuando se da click izquierdo dentro del elemnto ejecuta la accion(se debe presionar y soltar dentro del elemento)
    alert("Pulsaste click");
});
boton2.addEventListener("dblclick",(e)=>{//*Ejecuta ele evento sise da boble click(el segundoclick debe ser en menos de 1segundo(o dependoendo de lo especificado por el sistema operatvo para ser considerado como doble click))(se debe presionar y soltar dentro del elemento)
    alert("Hola Mundo");
});
boton2.addEventListener("mouseover",(e)=>{//*cuando se pase el puntero del mouse sobre el elemento se aplicara la accion (se debe presionar y soltar dentro del elemento)
    alert("!Que mirás bobo¡");
});
boton2.addEventListener("mouseout",(e)=>{//*cuando se el puntero del mouse del elemeto se ejecuta la accion (se debe presionar y soltar dentro del elemento)
    alert("Andá, andá pá asha Bobo")
});
contenedor2.addEventListener("contextmenu",(e)=>{//*cuendo se pulsa click derecho dentro del elemento se ejecuta esa accion (se debe presionar y soltar dentro del elemento)
    alert("epa");
});
boton2.addEventListener("mouseenter",(e)=>{//*se ejecuta la accion cuando el cursor pasa sobre el elemento(Es especifico para internet explorer)
   alert("museenter");
});
boton2.addEventListener("mousemove",(e)=>{//*Miestras el cursor este posicionado en el elemento se ejecutara
    alert("mousecmove")
});
boton2.addEventListener("mouseup",(e)=>{//*Cuando se sulta el click derecho o izquierdo detro del elemento se ejecuta
   alert("hola");
});
boton2.addEventListener("mousedown",(e)=>{//*Cundo se presiona cualquier boton del mouse sobre el elemento se ejecuta
   alert("hola");
});
boton2.addEventListener("mouseleave",(e)=>{//*Cuando se posiciona el mouse en el elemento y se quita del elemto se ejecuta
    alert("Hola mundo");
});
const input = document.querySelector(".input");

input.addEventListener("keydown",()=>{//*ocurre cuando una tecla se deja de presionar 
    console.log("Uan teca fue presionada");
});
input.addEventListener("keypress",()=>{//*ocurre cuando una tecla se presiona y se suelta en un elemnto
    console.log("Un usuario presionó una tecla y la solto");
});
input.addEventListener("keyup", (e)=>{//*ocurre cuando una tecla se suelta en un elemto
    console.log("Una tecla fué soltada");
});
const imagen = document.querySelector(".imagen");
imagen.addEventListener("error",()=>{//*si ocurre un error se ejecutara
    console.log("Ha ocurrido un error");
});
addEventListener("load",()=>{//*Cuando termine de cargar el sitio se ejecutara(tambien se puede usar como window.addEventListener)
    alert("La pagina ha cargado");
});
addEventListener("beforeunload",()=>{//*despues de que te vas del sitio web
    console.log("Adios");
});
addEventListener("unload",()=>{//*despues de que te vas del sitio web
    console.log("Adios");
});
addEventListener("resize",()=>{//*se ejecua cada vez que se camvia el tamño de la pagina
    console.log("se cambió el tamaño del documento");
});
addEventListener("scroll",()=>{//*Cada vez que se hace scroll en la pagina se ejecuta(debe realizarze el movimiento en la pagina, si se llegó al final, ya no seguira contando, lo mismo con el principio)
    console.log("Se ha scroleado")
});
input.addEventListener("select",(e)=>{//*Cada ves que se lecciona un elemento y se sulta el clic se ejecuta
    console.log("se ha seleccionado");
    console.log(e.target.value);
    contraseña = e.target.value;
    console.log(e.target.selectionstart)
});
const contenedor3 = document.querySelector(".contenedor3");
input.addEventListener("select",(e)=>{//*cada vez que se selecciona el texto de un input se ejecuta el evento
    let start = e.target.selectionStart;//*obtiene el principio de la seleccion  
    let end = e.target.selectionEnd;//*obtiene el finnal de la seleccion
    let textoCompleto = input.value;//*retorna el valor del inpuut
    contenedor3.innerHTML= textoCompleto.substring(start,end);
});
input.addEventListener("keyup",(e)=>{
    console.log(e.key)//*Muestra la tecla que se presionó
});
input.addEventListener("keyup",(e)=>{//*cada vez que se pulsa una tecla se ejecuta el evento
    let tecla = e.key;//*guarda la tecla que se presiona 
    let contenido = `La ultima tecla presionada fué: ${tecla}`
    contenedor3.innerHTML = contenido;//*Con innerHTML se crea un elemento html
});
setTimeout(()=>{//*Ejecuta una funcios despues de transcurrido el tiempo especificado en milisegundos (1 segundo = 1000 milisegundos)(Consumen mucho recursos por lo que es preferible no usarlos demaciado)
    console.log("Forma 1")
},2000)

function saludar(){//*Tambie se puede crear la funcio fuera del setTimeout
    console.log("forma 2");
}
const tiempo = setTimeout(saludar,2000);//*Se coloca el nombre de la funcion creada fuera(Consumen mucho recursos por lo que es preferible no usarlos demaciado)
clearTimeout(tiempo);//*elimina el setTimeout
const intervalo = setInterval(()=>{//*Ejecuta la funcio cada vez quetranscurre el tiempo especificado(Consumen mucho recursos por lo que es preferible no usarlos demaciado)
    console.log("Hola mundo")
},3000);
clearInterval(intervalo)//*elimina el  setIntervalo