//Agarramos los elementos del DOM. Aquí estamos guardando los elementos del HTML en variables para poder usarlos despué

const input = document.getElementById("userInput");
const countdown = document.getElementById("countdown");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restart");

// Creamos variables para el intervalo y el número aleatorio

let interval;
let randomNumber;

// Función principal para iniciar el juego

function startGame() {

//limpiamos resultados anteriores para empezar de cero
  result.innerHTML = "";
  countdown.innerHTML = "";

  //Aquí cogemos lo que el usuario ha escrito, que es texto, y lo convertimos en número.
  const userNumber = parseInt(input.value);
  if (![1, 2, 3].includes(userNumber)) {
// Si el número no está entre 1 y 3, mostramos un mensaje de error y paramos la función.
    result.innerHTML = "Por favor, introduce un número válido del 1 al 3.";
    return;
  }

  // Elegimos un número aleatorio entre 1 y 3.
  randomNumber = Math.floor(Math.random() * 3) + 1;

  // Iniciamos la cuenta atrás de 5 segundos.
  let timeLeft = 5;
  countdown.innerHTML = `Cuenta atrás: ${timeLeft}`;
//Contador que baja cada segundo
  interval = setInterval(() => {
    timeLeft--;
    countdown.innerHTML = `Cuenta atrás: ${timeLeft}`;
//Cuando llega a 0, paramos el intervalo y comprobamos el resultado.
    if (timeLeft === 0) {
      clearInterval(interval);
      checkResult(userNumber);
    }
  }, 1000);
}

// Función para comprobar el resultado

function checkResult(userNumber) {
  if (userNumber === randomNumber) {
    result.innerHTML = `¡Has salvado el mundo!<br>Tu número: ${userNumber}<br>Número correcto: ${randomNumber}`;
  } else {
    result.innerHTML = `La bomba ha estallado...<br>Tu número: ${userNumber}<br>Número correcto: ${randomNumber}`;
  }
}

// Reiniciar el juego
restartBtn.addEventListener("click", () => {
  clearInterval(interval);
  input.value = "";
  countdown.innerHTML = "";
  result.innerHTML = "";
});

// Iniciar juego al cambiar el valor del input

input.addEventListener("change", startGame);
