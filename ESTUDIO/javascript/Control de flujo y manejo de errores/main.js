try{//*Si el codigo dentro tiene un error se puede enviar al catch 
    throw{//*Lanza un error

    }
}
catch(error){//*se puede manejar el error que genere el codigo dentro del try(un try siempre debe trener un catch)
    alert("ocurrio un error")
}
finally{//*puede remplazar al catch, pero este se muestra aunque no tenga errores
    alert("Siempre voy a aparecer")
}