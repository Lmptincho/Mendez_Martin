/*Crea una función que genere 100 números aleatorios entre 1 y 100 que no se repitan y luego
imprima por pantalla usando document.write()*/

function generarNumeros(){
    var numeros = []
    while (numeros.length < 100){
        var numero = Math.floor(Math.random() * 100) + 1;       // math.floor devuelve un numero entero redodeado hacia abajo, a partir de un decimal, math.random genera un numero decimal aleatorio. combinando estas funciones se generan numeros aleatorios entre 0 y 99
        if (numeros.indexOf(numero) === -1 ){                   //comprueba que el número generado no está presente en el arreglo. Si no se encuentra, se agrega al array.
            numeros.push(numero)
        }
    }

    for (i = 0; i< numeros.length; i++){
        document.write(numeros[i] + "<br>")
    }
}
generarNumeros()
