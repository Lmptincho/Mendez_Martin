/*Ejercicio 1:
A partir del siguiente array que se proporciona:
var valores = [true, false, 2, "hola", "mundo", 3, "char"];
1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
2. Imprimir estos elementos de menor a mayor cantidad de letras.
3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta,
multiplicación y división) realizadas con los dos elementos numéricos*/

var valores = [true, false, 2, "Martin", "mundo", 3, "char"];                               //determine el array 
mayor = "";                                                                                 //cree la variable "mayor"
for (var i = 0; i < valores.length; i++){                                                   // inicie el for 
   if (typeof (valores[i]) == "string" && valores[i].length > mayor.length){                // "si el tipo de dato de valores es un string y la cantidad de letras es mayor a "mayor"
    mayor = valores[i]                                                                      //guarda la palabra en la variable mayor
   }
}
console.log("El string con mas letras:", mayor)                                             // Luego de comparar todos los datos del arreglo enseña por consola la palabra con mas letras

//ordeno los strings de menor a mayor

var palabras = valores.filter(function (valor) {                                            //esta parte del codigo filtra con la funcion "filter" los datos del arreglo que no son del tipo string
    return typeof valor == "string";
});

palabras.sort(function (a, b) {                                                             //ordena el arreglo "palabras" de menor a mayor
    return a.length - b.length;
})

console.log("Elementos de texto ordenados por cantidad de letras:");
palabras.forEach(function (elemento){
    console.log(elemento);
})

// Las cuatro operaciones matematicas 
var num1, num2;
for (var i = 0; i < valores.length; i++){                                                   //inicio el bucle for
    if (typeof valores[i] == "number"){                                                     //busca variables del tipo "number" dentro del arreglo
        if (num1 === undefined){                                                            //si la variable num1 es indefinida le agrega el primer valor que encuentra en valores
            num1 = valores[i]                                                               //luego ya definida la variable num1 pasa a hacer lo mismo con num2
        } else {
            num2 = valores[i]
            break                                                                           //detiene el bucle for 
        }
    }
}
if (num1 !== undefined && num2 !== undefined) {                                             //verifica que num1 y num2 no tengan un valor indefinido
console.log("Suma", num1 + num2)                                                            
console.log("Resta", num1 - num2)
console.log("Multiplicacion", num1 * num2)
console.log("Division", num1 / num2)
} else {
    console.log("no se encontraron numeros")                                                // hace las 4 operaciones y muestra por consola
}

