//const item3 = document.createElement("LI");//*creacion del elemeto
//const textItem3 = document.createTextNode("Prueba3");//*creacion del contenido
//item3.appendChild(textItem3);//*se agrega el contenido al elemnto
//contenedor.appendChild(item3);//*se agrega el elemeto al contenedor
// const elemento = document.getElementById('t-cursos');
// elemento.innerHTML = 'cursos de 2023' //*permite cambiar el valor de la etiqueta html(si se realiza desde la consola del navegador al recargar restablecera al valor original, si se hace desde el editor no)
// console.log(elemento.innerHTML);//*permite visualizar el valor del htmlz
// document.getElementById('mensajes').innerHTML = 'cursos del manejo del Dom';//*no es necesario crear una variable para hacer los cambios
// const elementoPadre = document.querySelector('ul');//*se usa para seleccionar por la etiqueta
// console.log(elementoPadre.childElementCount);//* muestra el numero de hijos que tiene una etiqueta HTML(aplica a cualquier etiqueta, ul, p, etc.)
// console.log(elementoPadre.children);//*mustra cada hijo de manera detallada(utilizando [corchetes] se puede seleccionar uno ene especifico, se cuenta como arreglo, es decir, el primer elemento es 0, es segundo 1 etc ); con firstElementCild se muestra el primer hijo, con lastElementChild se muestra el ultimo hijo
parrafo1 = document.getElementById("parrafo");//*Obtener un elementopor su id
parrafo2 = document.getElementsByTagName("p");//*Obtener un elemento por el nombre de su etiqueta
parrafo3 = document.querySelector(".parrafo");//*Obtene un elemento por el id o clase(se slecciona como en css, # para id y . para clase)
parrafo4 = document.querySelectorAll(".parrafo");//*Selecciona todos los elementos que coincidan con la clase o id ingresado dentro de las comillas
const rango = document.querySelector("#rango");//*seleciona un elemto pos su id o clase
//rango.setAttribute("type","color");//*cambia el tipo de atributo
//rango.removeAttribute("type");//*elimina un atributo
const titulo = document.querySelector(".titulo");//*Selecciona un id por su clase o id
titulo.setAttribute("contentEditable","false");//*contentEditable permite editar el texto desde la pagina
titulo.setAttribute("dir","rtl");//*cambia la direccion del texto
//titulo.setAttribute("hidden","false");//*oculta el elemento, si esta definido aunqzue sea falso se va a ocultar
titulo.setAttribute("tabindex","0");//*cambia un atributo de la etiqueta(el primer dato es el atributo que se cambiará, el segundo es nu nuevo valor)
const input = document.querySelector(".input");//*Selecciona un elemento por su id o por su clase
document.write(input.className);//*Muestra el valor de la clase
document.write(input.value);//*Muestra el valor del elemento
input.className;//*para acceder a el valor de la clase
input.value;//*Para acceder al valor
input.type = "text";//*para acceder al tipo
input.accept = "image/png";//*accept, permite modificar los archivos que permite el imput(en caso que sea tipo fille)
const enviar = document.querySelector(".enviar");
enviar.form;
enviar.setAttribute("form","formulario");//*Permite cambiar el valor del form
input.minLength = "10";//*Hace que el input solo se pueda envar si tiene minimo esa cantidad de letras
input.setAttribute("minlength", "4");//*otra forma de dcir la cantidad de letras minimas
input.placeholder = "Nombre";//*es una mensaje que aparecera en el input, cuando se escriba en el se eliminará automaticamente (no cuenta como valor del imput)
input.required = "";//*Hace que el campo sea requerido, es decir, no puede quedar vacio (aunque no tenga true, con que se use el .required serárequerido(si tiene false o esta completamente vacio("") no sera requerido))
titulo.style.color = "blue";//*darle estilos
titulo.style.backgroundColor = "red";//*en el caso de que sean propiedades dividadas en 2 palabras se usa el camel case (EJ: CSS= font-size JavaScript=fontSize)
titulo.classList.add("tituloAdd");//*permite agregar una clase, que se puede modificar utilizardo el archivo css, pero en dicho archivo no se podra midificar los estilos dados en javascript
titulo.classList.remove("tituloAdd");//*Remueve la clase especificada
const valor = titulo.classList.item(2);//*devuelve la clase que se encuentra en esa posoción, empezando desde 0
const contains = titulo.classList.contains("clase2");//*verifica si tiene la clase especificada, si en verdad arroja true sino false
titulo.classList.toggle("clase2");//*si tiene esa clase la elimina, si no la agrega(si la clase existe, la elimina y devuelve false, sino existe, la agrega y muestra true)
titulo.classList.toggle("clase2",true);//*agregandole el true, dejara la clase en caso de que si este(si se agrega false, la elimina)
titulo.classList.replace("clase3", "clase5");//*rempplaza la clase especificada por otra (el primer valor es la clase a remplazar y el segundo es la que lo remplazara, en caso de que no eista la clase a remplazar arroja false y no agrega nada en caso de que la clase que remplazara a la otra ya exista si la remplaza)
const texcontent = titulo.textContent;//*Devuelve el texto de cualquier nodo(etiqueta)
//!const innertext = titulo.innerHTML;//*devuelve el texto visible de cualquier nodo(EJ: en caso de que exista una propiedad hidden NO la mostrara )(no se usa)
const innerhtml = titulo.innerHTML;//*devuelve el contenido html de un elemnto
const outerhtml = titulo.outerHTML;//*devuelve el codigo html completo de un elemento (incluse los estilos)
const contenedor = document.querySelector(".contenedor");
const item = document.createElement("LI");//*creacion de un elemento, se guarda en la vairable para poder utoilizarlo
const textoDelItem = document.createTextNode("prueba");//*se crea el contenido del elemnto
item.appendChild(textoDelItem);//*se ingresa la info en el LI
contenedor.appendChild(item);//*se ingresa el LI en el contenedor(div=contenedor);
const item2 = document.createElement("LI");//*creacion de un elemento html
const contenidoIten2 = document.createTextNode("Prueba2");//*Creacion del contenido del elmento
item2.appendChild(contenidoIten2);//*Se agrega el ontenido en el elemto
contenedor.appendChild(item2);//*Se agrega el elemento en el contenedor
const fragmento = document.createDocumentFragment();
for (i = 0; i < 20; i++){
  const itemp = document.createElement("LI");
  itemp.innerHTML = "Prueba";
  fragmento.appendChild(itemp);
}
contenedor.appendChild(fragmento);
const primerHijo = contenedor.firstChild;//*muestra el primer hijo (los espacios entreetiqueta cuentan como hijos (EJ: <div class="contenedor"> <h1>hola mundo</h1></div>|| EL ESPACIO QUE HAY ENTRE EL MAYOR QUE DEL DIV Y EL MENIR QUE DEL H1 SE CONSIDERARIA UN HIJO, SI NO TIENE ESPACIOS, EL H1 SERIA EL PRIMER HIJO))
const ultimoHijo = contenedor.lastChild;//*funciona igual a firstChild pero con el ultimo
const primerElemento = contenedor.firstElementChild;//*muestra el primer elemento hijo(en este caso los espacios no cuentan como hijos)
const ultimoelemento = contenedor.lastElementChild;//*funciona igual que firstElementChild pero con el ultimo
const hijos = contenedor.childNodes;//*muestra todos los hijos
const children = contenedor.children;//*solo muetra los elementos
//! const p = document.createElement("P").innerHTML="parrafo";
const h1_nuevo = document.createElement("H1");//*Creacion de un elemento html
h1_nuevo.innerHTML="Titulo";//*creacion del contenido quetendrael elemto
h1_antiguo = document.querySelector(".h2");//*se selecciona un elemeto html
contenedor.replaceChild(h1_nuevo,h1_antiguo)//*Resplaza un elemento hijo por otro
contenedor.hasChildNodes();//*verificva si un elemento tiene hijos
const respuestas = item2.parentNode;//*Muestra al padre del elemeto
const respuesta2 = item2.parentElement;//*funciona igual a parentNode
const nextSiblings = item2.nextSibling;//*muestra al nodo hermano siguiente(cuenta los espacios)
console.log(item2.previousSibling);//*muestra el nodo hermano anterior(cuenta los espacios)
console.log(item2.nextElementSibling);//*muestra el nodo hermano siguiente( NO cuenta los espacios)
console.log(item2.previousElementSibling);//*muestra el nodo hermano anterior( NO cuenta los espacios)
contenedor.removeChild(h1_nuevo);//*Elimina un child
const h2Prueba = document.querySelector(".h2Prueba");
console.log(h2Prueba.closest(".content2"));//*Mustra en contenedor mas cercano que conside con la condicion, si no exixte es null(solo funciona con div)
const item10 = document.createElement("LI");
const contenido = document.createTextNode("Prueba de texto");
item10.appendChild(contenido);
contenedor.appendChild(item10);