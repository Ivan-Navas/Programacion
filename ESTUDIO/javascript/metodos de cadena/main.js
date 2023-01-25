let cadena1 = "hola hola hola";
let cadena2 = " mundos"
let concat = cadena1.concat(" mundo" + cadena2 );//*Sirve para concatenar 2 o mas  cadenas de texto
let starstwith = cadena1.startsWith("hola");//*si la cadena empieza con el valor indicado arroja true, sino false
let endswith = cadena1.endsWith("hla");//*verifica si la cdena termina con el valor indicado, si es verdadero arroja true sino false
let includes = cadena1.includes("l");//*verifica si la cadena contiene el valor exactamente indicado sin importar en que posición esté EJ: hola: contiene la l daria true, EJ2: hola: hl daria false, ya que apeczar de contener la h y la l no es exactamente en ese orden 
let indexof = cadena1.indexOf("l");//*muestra la posición se encuentra el valor indicado, EJE: hola: se ingresa el valor l, h=0 o=1 l=2 a=3: la l se encuetra en la posicion 2, por lo que debuelve esa posición (Si debuelve la posición -1 es porque no se encuentra)(si tiene varios valores que coinciden debuelve el primero)
let lastindexof = cadena1.lastIndexOf("a");//*Muestra la ultima posición que concida con el valor indicado(Funciona parecido a indexOf)

let padstart = cadena1.padStart(10,"*");//*rellena la cadena con el valor indicado al principio de la cadena hasta que tenga el numero de caracteres especificado padStart(numero de caracteres,"valor a rellenar(dentro de comillas"). (si la cadena ya tiene ese numero de caracteres no hará nada, se cuentan por letras, EJ: hola, que tenga 5 caracteres, rellenando con "mundo", solo se usara la m, porque ya tendria los 5 caracteres)
let padend = cadena1.padEnd(10, "*");//*funciona igual a padStart, pero esta lo agrega al final
let repeat = cadena1.repeat(2);//*Repite la cadena el numero de veces indicado
let split = cadena1.split(" ")//*divide la cadena en el valor indicado y devuelve un array(Cada vez que se encuenbtre con el valor indicado dividirá la cadena, tambien los espcacios)(El valor por el que se dividio no se mostraria mas)
let substring = cadena1.substring(0,3);//*devuelve un string cortado por las posiciónes indicadas, (el final no se incluye EJ: hola, 0,3= h=0 o=1 l=2 a=3: en este caso tomaria la posicion 0,1,2 )
let tolowercase = cadena1.toLowerCase();//*convierte la cadena a minusculas
let touppercase = cadena1.toUpperCase();//*convierte la cadena a mayuscula
let trim = cadena1.trim();//*eleimina los espacios del final y el principio de la cadena de texto
let trimend = cadena1.trimEnd();//*elimina los espacios del final de la cadena de texto
let trimstart = cadena1.trimStart();//*elimina los espacios del principio de la cadena de texto
let length = cadena1.length;//*muestra el tamaño de la cadena

document.write(length);