/*Ejercicio 4:
Escribir el código de una función a la que se pasa como parámetro un número entero y
devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por
pantalla el resultado devuelto por la función.
Por ejemplo si ingresara un dos el resultado debe ser par y si ingresara un 5 el resultado
debe ser impar*/

var numero = prompt("ingrese un numero")            //pido al usuario que ingrese un numero por pantalla
if (numero < 0 ) {
    alert("por favor un numero natural")            // un alert para que no escriba un numero negativo (no se como hacer para que no escriba una palabra)
}

function paroinpar(num){                            //creo la funcion
    if (num % 2 ===0){                              // si el resto de num divido 2 es 0 entonces
        return "el numero es par pa"                //devolve por pantalla que es par 
    }else{
        return "el numero te salio impar"           //sino devolve impar
    }

}
resultado = paroinpar(numero)
document.write(resultado)                           //muestro por pantalla 
