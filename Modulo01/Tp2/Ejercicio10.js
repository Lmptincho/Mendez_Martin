/*Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días.
Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días*/


let meses = ["Enero, Tiene 31 dias", "Febrero, Tiene 28 dias", "Marzo, Tiene 31 dias", "Abril, Tiene 30 dias", "Mayo, Tiene 31 dias", "Junio, Tiene 30 dias", "Julio, Tiene 31 dias", "Agosto, Tiene 31 dias", "Septiembre, Tiene 30 dias", "Octubre, Tiene 31 dias", "Noviembre, Tiene 31 dias", "Diciembre, Tiene 31 dias",]

let num = prompt("Ingrese el numero del mes correspondiente, a continuacion se le dira cuantos dias tiene dicho mes")

if (parseInt(num) >= 1 && parseInt(num) <= 12){
    document.write (meses[num-1]);

}else{
    num = prompt("ingrese otro valor pavote")
}
