/*Crear un programa que recibe las notas de un alumno, todos los números deben ser naturales
< 11. Debe calcular el promedio. Por último imprimir en pantalla si el valor de media es < 5
“Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente*/

cantidad_notas = prompt("Cuantas notas tiene el alumno?")
contador = 0
notas_acumulador = [] 

while (contador < cantidad_notas){
    
    notas = parseInt(prompt("ingrese las notas"))
    if (notas<11){
        
        
        contador++
        
         
    } else {
        alert("No podes sacar mas de 10 quien sos")
    }
    notas_acumulador.push(notas)
}

suma = 0
for (i = 0; i < notas_acumulador.length; i++){
    suma += notas_acumulador[i]
}

promedio = suma / notas_acumulador.length

document.write(`El promedio final es: ${promedio} <br>`)
if (promedio <= 5){
    document.write("Usted no aprobo")
} else if (promedio>5 && promedio <= 8){
    document.write("usted aprobo satisfactoriamente")
}else if (promedio>8){
    document.write("Sos un genio man")
}
