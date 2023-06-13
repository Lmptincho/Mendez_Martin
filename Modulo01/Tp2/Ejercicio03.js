/*Ejercicio 3:
El factorial de un número entero positivo se define como el producto de todos los números
naturales anteriores o iguales a él. Es decir que multiplicando todos los factores n x (n-1) x (n-2) x ... x
1.
Por ejemplo: el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura FOR, crear un script que pueda calcular el factorial de un número entero.*/ 

var numero = prompt("ingrese un numero natural")            //cargo la variable num por pantalla
if (numero < 0){
    alert("Amigo no poder ser tan gil")                     //mediante un alert evito que el usuario ingrese algo que no sea un numero natural
}

function Calculo(num){                                      //creo una funcion para calcular el factorial dandole un parametro 
    var factorial = 1                                       // la variable factorial vale 1 
    for (i = 1; i<=num; i++){                               // inicio el bucle for hasta que i sea igual al parametro que le de
        factorial *= i                                      // multiplico la variable factorial por si misma + i y la vuelvo a guardar en la misma variable (factorial = factorial+i)

    }
    return factorial                                        //return devuelve el valor final de factorial 
}
resultado = Calculo(numero)                                 // creo una variable que tendra el valor de la funcion calculo 
document.write(`El factorial de ${numero} es ${Calculo(numero)}`)       //muestro el resultado por pantalla al usuario 









