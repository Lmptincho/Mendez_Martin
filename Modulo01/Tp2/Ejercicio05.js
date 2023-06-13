/*Ejercicio 5:
Crear una función que muestre información sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas*/
cadena = prompt("ingrese una cadena de texto")

function texto(cadenadetexto){
    if (cadenadetexto === cadenadetexto.toUpperCase()){
        return "la cadena esta compuesta por mayusculas"
    } else if ((cadenadetexto === cadenadetexto.toLowerCase())){
        return "la cadena esta compuesta por minusculas"
    } else {
        return "La cadena esta compuesta por mayusculas y minusculas"
    }
}
resultado = texto(cadena)
document.write(texto(cadena))
