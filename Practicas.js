//Practica 1 ------------------------------------------------------------------------------------------------------------------------------------------------------
alert ('!Bienvenida y bienvenido a nuetro sitio web¡')
let nombre = 'Lua';
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = "!Error¡ Completa todos los campos";


alert ('!Error¡ Completa todos los campos');
alert (mensajeDeError);
nombre = prompt('Indique su nombre por favor:');
edad = prompt('Indique su edad por favor:');

if(edad >= 18){
    alert ('Puedes obtener tu licencia de conducir');
}

//------------------------------------------------------------------------------------------------------------------------------------------------------
//Practica 2 
//Parte 1
let dia = prompt ("¿Que dia de la semana es hoy?");
if(dia !="domingo" || dia != "sabado"){
alert("!Buena semana¡");
}else{
alert("!Buen fin de semana¡")
}

//Parte 2
let numero = prompt ("Ingrese un numero");

if(numero > 0){
    alert ("Es un número positivo");
}else{
    alert("Es un número negativo");
}

//Parte 3
let puntos = 100;
if(puntos <= 100){
    alert ("Por favor intentelo de nuevo para poder ganar")
}else{
    alert("!Has ganado¡")
}

//Parte 4
let saldoCuenta = 500; // Ejemplo de saldo
alert(`Tu saldo es de ${saldoCuenta}.`);

//Parte 5
let name = prompt("Proporcione su nombre por favor:");
alert ("Hola " + name + ", seas bienvenido");

//------------------------------------------------------------------------------------------------------------------------------------------------------