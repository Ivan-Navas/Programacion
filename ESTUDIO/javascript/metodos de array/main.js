let nombres = ["ivan", "ramiro", "navas", "guerrero",1,2,3];
let nombres2 = ["ivan", "ramiro", "navas", "guerrero",1,2,3];
document.write("Arreglo original: " + nombres + "<br>");
let pop = nombres.pop();//*Elimina el ultimo elemento del array y lo devuelve
let shift = nombres.shift();//*Hace lo mismo que pop, pero con el primer elemento
let push = nombres.push("hola");//*agrega un elemento al final del arreglo y retorna su nuevo tamaño
let reverse = nombres.reverse();//*retorna el array invertido
let unshift = nombres.unshift("mundo");//*agrega 1 o mas elementos al inicio del array y devuelve su nueva longitud
let sort = nombres.sort();//*ordena el arreglo, en orden alfabetico, si incluye numeros irian primero de menor a mayor
let splice = nombres2.splice(1,0,"agregado1","agregado2");//*remplaza los elemntos desde la posicion indicada en el primer valor hasta la posicion en el segundo valor(incluyendo ese elemento) y agrega los elementos indicados enlas siguientes posiciónes, en el caso de que no se quiera eliminar, en el segubndo valor se pone 0, y en el primero la posición en la que se quiera poner 
let join = nombres2.join("<br>Resultado: ");//*convierte el arreglo en una cadena de texto y permite poner un separador eje " - "
let slice = nombres2.slice(0,4);//*Retorna los elemenbtos en la posición indicada(el segundo valor no incluido, en este caso el 4 no incluido, es decir, solo selecciona hasta la posición 3)(usndo -1 se seleccionan hasta el ultimo elemento )
let includes = nombres2.includes("ivan");//*Verifica si se encuentra un elemento exactamente(incluyendo mayuscula y minuscula) igual al especificado EJ: arreglo["ivan"] includes("Ivan") mostrara false 
nombres2.filter(nombre => document.write(nombre +"<br>"));//*funciona similar a un bucle, la variable va a tomar el valor de cada una de la posiciones a medida que va recorriendo el array(se puede poner condiciones para que seleccione solo algunos alementos);
nombres2.forEach(nombre => document.write(nombre + "<br>"));//*funciona igual a filter, pero no permite poner condiciones
//? filter foreach 
document.write(" Resultado: "+ includes);
