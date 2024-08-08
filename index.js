let nombre;
let btn = document.getElementById("btn")
let pc;
let user;
let puntajeUsuario = 0;
let puntajePc = 0;

function saludar(){
    alert("hola ")
}

function aleatorio(){
   return Math.floor(Math.random()*3+1)
}

for(let i = 0; i < 3; i++){
  user = prompt("ingresa un numero del 1 al 3");
  pc = aleatorio()
  if (user == pc) {
    alert("empate")
  } else if (user == 1 && pc == 3) {
    alert("you win")
    puntajeUsuario += 1
  } else if ( user == 2 && pc == 1) {
    alert ("you win")
    puntajeUsuario += 1
  } else if ( user == 3 && pc == 2){
    alert ("yow win")
    puntajeUsuario += 1
  } else {
    alert ("Pc wins")
    puntajePc += 1
  }

}
if (puntajeUsuario == puntajePc){
    alert ("empate")
}   else if (puntajeUsuario> puntajePc){
    alert ("user wins the game")
}   else {
    alert ("pc wins the game")
}

 