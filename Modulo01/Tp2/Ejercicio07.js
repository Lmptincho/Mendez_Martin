//Escribir una función que reciba un texto y lo devuelva al revés
cadena = prompt("ingresa una cadena de texto")

function invertirTexto(texto) {

    return texto.split('').reverse().join(''); }            
    
const cadenaInvertida = invertirTexto(cadena);
document.write(cadenaInvertida);

/*split('') convierte el texto en un array de caracteres, separando cada carácter.
reverse() invierte el orden de los elementos en el array.
join('') une los elementos del array invertido en una cadena, sin separadores.*/
