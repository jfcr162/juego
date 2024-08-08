let nombre;
let btn = document.getElementById("btn")
let pc;
let user;
let puntajeUsuario = 0;
let puntajePc = 0;
alert("Bienvenidos al juego: Piedra, Papel o Tijeras")
alert("Para jugar debes elegir 1 para papel, 2 para piedra o 3 para tijeras")
alert("Jugarás contra el pc en 3 ocasiones. Exitos!")
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
    alert(`usuario elige ${user} pc elige ${pc} EMPATE`)
  } else if (user == 1 && pc == 3) {
    alert(`usuario elige ${user} pc elige ${pc} Ganaste punto`)
    puntajeUsuario += 1
  } else if ( user == 2 && pc == 1) {
    alert (`usuario elige ${user} pc elige ${pc} Ganaste punto`)
    puntajeUsuario += 1
  } else if ( user == 3 && pc == 2){
    alert (`usuario elige ${user} pc elige ${pc} Ganaste punto`)
    puntajeUsuario += 1
  } else {
    alert (`usuario elige ${user} pc elige ${pc} PC gana punto`)
    puntajePc += 1
  }

}
if (puntajeUsuario == puntajePc){
    alert (`usuario obtuvo: ${puntajeUsuario} puntos y pc obtuvo: ${puntajePc} puntos. juego EMPATADO`)
}   else if (puntajeUsuario> puntajePc){
    alert (`usuario obtuvo: ${puntajeUsuario} puntos y pc obtuvo: ${puntajePc} puntos. GANASTE`)
}   else {
    alert (`usuario obtuvo: ${puntajeUsuario} puntos y pc obtuvo: ${puntajePc} puntos. PC GANA`)
}

alert("Hasta la próxima!")

 