/*Crear el archivo “ejercicio_10.js”. Declarar un array llamado “meses” y que tenga guardado los
meses del año. Luego el usuario debe poder ingresar en el navegador un número de 1 al 12 y este
le devolverá el nombre del mes. Por ejemplo escribe 5 debe devolver el mes mayo.*/

/*const meses = [];
meses[1]= "Enero", meses[2]= "Febrero", meses[3]= "Marzo", meses[4]= "Abril", meses[5]= "Mayo", meses[6]= "Junio", meses[7]= "Julio";
meses[8]= "Agosto", meses[9]= "Septiembre", meses[10]= "Octubre", meses[11]= "Noviembre", meses[12]= "Diciembre"

document.write(meses[prompt("Ingrese que numero del mes del año quiere ver") ])
*/

let meses = ["uno", "dos", "tres", "cuatro", "cinco"]

let num = prompt("Ingrese un numero entre el 1 y el 5")

if (parseInt(num) >= 1 && parseInt(num) <= 5){
    document.write ("el numero que pusiste fue " + meses[num-1]);

}else{
    num = prompt("ingrese otro valor pavote")
}

