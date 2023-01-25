const ventana = window.open("https://www.youtube.com");//*Para abrir una nueva ventana en el navegador
ventana.close();//*gueardando una ventana en la variable permite cerrarla
const respuesta = ventana.closed;//*verifica si la ventana esta cerrada o no(si esta cerrada arroja true, si esta abierta arroja false, si no existe arroja error)
document.write(respuesta);
ventana.stop();//*para la carga del sitio web, (si e hace desde la consola del navegador se usa window.stop(); )
print();//*Imprime(impresora) la ventana
prompt("hola mundo");//*resibe un dato y siempre lo guarda como string
confirm("¿Estas seguro?");//*mustra un mesaje de confirmacion, si se le da aceptar retorna true, si se le da canselar retorna false
console.log(window.screen);//*Devuelve la referencia al objeto de pantalla asociado
const izquierda = window.screenLeft;//*retorna la distancia desde el borde izquierdo de la pagina y el borde izquierdo de la pantalla 
const arriba = window.screenTop;//*retorna la distancia desde el borde superior de la pagina y el borde superior de la pantalla 
const scrollx = window.scrollX;//*retorna el desplazamiento horizontal
const scrolly = window.scrollY;//*retorna el desplazamiento vertical; no se suma, (Ej: si se desplaza al principio del eje y, baja 50 regresa al inicio y baja 12, el desplazamientop sera 12, ya que no se suman todos los desplzamientos)
document.write("x: " + scrollx);
document.write("y: " + scrolly);
window.scroll(0,200);//*desplaza la pagina en la medida indicada (x,y)
window.resizeBy(200,100);//*cambia el tamaño de la ventana(El navegador bloquea esta opcion)
window.resizeTo(200,200);//*redimenciona dinamicamente el tamño de la ventana(El navegador bloquea esta opcion)
window.moveBy(200,200);//*Mueve la ventana a la posicion indicada(El navegador bloquea esta opcion)
window.moveTo(200,200);//*mueve la ventana a una posocion indicada(El navegador bloquea esta opcion)
console.log(window.location.href);//*Muestra la ubicacion del archivo
console.log(window.location.hostname);//*devuelve el dominio del sitio
console.log(window.location.pathname);//*retorna donde estamos, desde el origen, (EJE: carpetaPrincipal/secundaria/proyecto/index.html)
console.log(window.location.protocol);//*retorna el protocolo de la pagina(http,https...)
window.location.assign("https://www.youtube.com");//*abre e sitio