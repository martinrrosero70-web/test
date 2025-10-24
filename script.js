let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guessInput').value);
  attempts++;

  const feedback = document.getElementById('feedback');

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
    return;
  }

  if (userGuess === randomNumber) {
    feedback.textContent = `¡Correcto! Lo adivinaste en ${attempts} intento(s).`;
  } else if (userGuess < randomNumber) {
    feedback.textContent = "Demasiado bajo.";
  } else {
    feedback.textContent = "Demasiado alto.";
  }
}
``