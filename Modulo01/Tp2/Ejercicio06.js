/*Ejercicio 6:
Escribir un script que muestre la posición de la primera vocal de un texto introducido por
teclado. que no permita escribir algo que no sea una cadena de texto Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1*/

cadena = prompt("Ingrese una cadena de texto")
if (typeof cadena === "string"){
const primera_vocal = cadena.search(/[aeiou]/i);                                //cadena.search busca la primera vez que aparece en la cadena las letras aeiou

if (primera_vocal !== -1){
    document.write(`La primera vocal esta en la posicion ${primera_vocal}`)     
} else {
    document.write("no se encontraron vocales en el texto")
}



}else{
    alert("Escribi una cadena de texto valida")
}


