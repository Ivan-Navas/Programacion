console.assert(3>4);//*si la condicion es falsa mostrara un error
console.clear();//*limpia la consola
console.error("tienes un error");//*Muestra un mensaje de error en la consola
console.info("eso ya se a visto");
console.table([1,2,3,4]);//*crea una tabla
console.warn("Este es un mensaje de advertencia");//*Muestra un mensaje de advertencia
console.clear();//*Limpia la consla
console.dir([1,2,3,4,5,6,7,6]);//*despliega una lista con los datos especioficados
console.count();//*actua como contador, cada ves que se ejecuta suma 1 a su contador
console.countReset();//*reinicia el contador de count();
console.group("grupo 1");//*crea un grupo en la consola (el grupo se crea cerraro, es decir, no muestra la info hasta que se amplia(se pulsa el triangulo al lado del nombre del grupo))
console.groupEnd();//*se sale del grupo
console.groupCollapsed("Grupo abierto");//*crea un grupo abierto, es decir, muestra la info desde el momento en que se crea
console.groupEnd();
console.time();//*inicia un contador de tiempo
console.timeLog();//*Mustra cuanto tiempo ha  pasado desde que se ejecuto Time();
console.timeEnd();//*Finaliza la cuenta de time();
console.log("%cHola mundo","color:red;font-size:20px")//*utilizando %c justo antes del texto en un console puntolog, se puede dar estilos a ese texto