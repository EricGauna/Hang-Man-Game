
"use strict";
String.prototype.replaceAt=function(index, character) 
{ return this.substring(0, index) + character + this.substring
    (index+character.length); } 

//Creamos un array con palabras

const palabras = ["COCIDO", "MACARRONES", "TORTILLA",
    "PAELLA", "BURRITO", "PLATANO", "MELON",
    "NARANJA", "MANZANA", "MELOCOTON"];
    
    

    //A través de Math.random, escogemos aleatoriamente el índice de una de las palabras 
    const palabraAleatoria = palabras[Math.floor(Math.random()*palabras.length)];
    
    //Reemplazamos las letras de la palabra aleatoria por guiones
    let palabraConGuiones = palabraAleatoria.replace(/./g, "_ ");
    
    //Marcamos la variable numero de fallos
    let numeroFallos = 0;
    
    //Activamos la función de la línea 3 y así poder reemplaza cada letra por su guón
    document.querySelector("#guionesPalabra").innerHTML = palabraConGuiones;
//Creamos un evento y asignamos las funciones al realizar click en "check"
document.querySelector("#checkButton").addEventListener("click", (event) => {
    //Con esta función, evitamos que al pulsar check, reinicia la página 
    event.preventDefault();
    
    //Marcamos la constante letra con el valor del input
    const letraUsuario = document.querySelector(`#boxLetter`).value;
    const letra = letraUsuario.toUpperCase()
    
    let error = true;
    //Creamos un bucle para recorra el array y compruebe si el valor introducido
    //se corresponde con alguna letra de la palabra aleatoria
    for(const i in palabraAleatoria){
        //En el caso de que coincida se reemplaza por los guiones correspondientes
        if(letra === palabraAleatoria[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2,letra);
            error = false;
        }
        
    }//Si no coincide la imagen se recorre con backgroundposition y aparecerá la 
    //representación del siguiente error
    if(error){
        numeroFallos++;
        document.querySelector("#imagenesAhorcado").style.backgroundPosition = 
        - (165*numeroFallos) + "px 0"
        //En el caso de que alcance los 5 cinco fallos aparecerá un alert con el mensaje de que ha perdido
        if(numeroFallos === 5){
            alert(`D.E.P :(
                La solución es: ${palabraAleatoria}`)
        }
        
    }   
    // si no, el indexOf buscará si quedan guiones restantes, en el caso de que ya no haya
    //saldrá un alert con la palabra VICTORIA
    else{
        if(palabraConGuiones.indexOf("_ ")<0){
            alert("VICTORIA")
        }
    }

    // Creamos un array vacio donde colocar las letras usadas
    const LetrasUtilizadas = []
    // Metemos en el array las letras para dibujarlas en el HTML
    LetrasUtilizadas.push(letra)
    // Seleccionamos donde vamos a colocar la letras usadas 
    const letrasUsadas = document.querySelector('#usedLetters').append(`${LetrasUtilizadas}`,'-')
    
    document.querySelector("#guionesPalabra").innerHTML = palabraConGuiones;
    //Con esta función hacemos que el input se resetee al haber pulsado CHECK 
    //(también se puede hacer con form.reset())
    document.querySelector("#boxLetter").value = "";
});
  


