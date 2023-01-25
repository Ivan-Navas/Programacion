class Animal{
    constructor(nombre, edad, peso){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.info = `Nombre: <b style = color:red>${this.nombre}</b> <br> Edad: <b style = color:red>${this.edad}</b> <br> Peso: <b style = color:red>${this.peso}</b>`
    }
    mostrarInfo(){
        document.write( this.info);
    }
}
class Perro extends Animal{
    constructor(nombre,edad,peso,raza){
        super(nombre,edad,peso);
        this.raza = raza;
    }
}
const perro = new Animal("Chocolate","13 años", "7 kilos");
const perro2 = new Perro("Chocolate","13 años", "7 kilos","Pro")
perro2.mostrarInfo();

const contenedor = document.querySelector(".contenedor");
const lista1 = document.createElement("LI");
const infoLista1 = document.createTextNode("Opcion #1");
lista1.appendChild(infoLista1);
contenedor.appendChild(lista1);

const boton = document.createElement("BUTTON");
const valorBoton = document.createTextNode("Enviar");
boton.appendChild(valorBoton);
contenedor.appendChild(boton);
boton.addEventListener("click",()=>{
   // alert("Hola mundo");
})

class Operacion{
    constructor(numero1,numero2){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    sumar(){
        this.resultado = this.numero1 + this.numero2;
        alert(this.resultado);
    }
}
const suma = new Operacion(12,10);
boton.addEventListener("click",()=>{
    suma.sumar();
});
const enviarSaludo = document.createElement("BUTTON");
const botonSaludo = document.createTextNode("SALUDAR");
enviarSaludo.appendChild(botonSaludo);
contenedor.appendChild(enviarSaludo);

enviarSaludo.addEventListener("click",()=>{
    alert("Hola mundo");
});
class Equipo{
    constructor(principal,secundario){
        this.principal = principal;
        this.secundario = secundario;
    }
    mostrarInfo(){
        document.write(`Principal: ${this.principal} Secundario: ${this.secundario}`);
    }
}
const primero = new Equipo("Ivan",("Navas"));
enviarSaludo.addEventListener("click",()=>{
    primero.mostrarInfo();
})


const elementoLi = document.createElement("LI");
const contenidoLi = docuemnet.createTextNode("Prueba");
elementoLi.appendChild(contenidoLi);
contenedor.appendChild(elementoLi);
const elemento1 = document.querySelector(".texto");
const elemento2 = document.getElementById("parrafo");
const elemento3 = document.getElementByTagName("li");
const elementos = document.querySelectorAll(".parrafo");

function saludar (){
    alert("Hola mundo");
}

const saludar2 = ()=>{
    alert("Hola mundo");
}

contenedor.addEventListener("click", saludar);
contenedor.removeEventListener("click", saludar);
contenedor.addEventListener("doubleclick",()=>{//*no se le puede eliminar este eventListener
    alert("Saludar");
});

