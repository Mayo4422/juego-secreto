//Variables
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos=3;

while(numeroUsuario != numeroSecreto){
     numeroUsuario = parseInt(prompt(`Indica un número entre 1 y ${numeroMaximo} por favor:`));

    console.log(numeroUsuario);
    if(numeroUsuario == numeroSecreto){
    alert(`Acertaste, el número correcto es ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    } else {
        if(numeroUsuario < numeroSecreto){
        alert("El numero secreto es mayor")
        }else{
            alert("El numero secreto es menor")
        }
        intentos++;
        // intentos = intentos + 1;
         palabraVeces = "veces";
         if (intentos > 3){
            alert(`Consumiste los ${maximosIntentos} intentos permitidos `);
            break;
         }
    }
    
}