"use strict";

//QUERY SELECTOR

const mainButton = document.querySelector(".js_button");
const userInput = document.querySelector(".js_inputNumber");
const paragraphResult = document.querySelector(".js_paragraphResult");
const userAttempts = document.querySelector(".js_attempts");
const resetBtn = document.querySelector(".js_resetBtn");

//VARIABLES

let randomNumber = getRandomNumber(100);

let attempts = 0;

//FUNCIONES

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const paintClue = (message) => {
  paragraphResult.innerHTML = message;
};

const showResultMessage = () => {
  const inputValue = parseInt(userInput.value);
  console.log(inputValue, randomNumber);

  if (isNaN(inputValue)) {
    paintClue("El número debe estar entre 1 y 100.");
  } else if (inputValue < 1 || inputValue > 100) {
    paintClue("El número debe estar entre 1 y 100.");
  } else if (inputValue === randomNumber) {
    paintClue("Has ganado campeona!!!");
  } else if (inputValue > randomNumber) {
    paintClue("Demasiado alto.");
  } else if (inputValue < randomNumber) {
    paintClue("Demasiado bajo.");
  }
  if (attempts >= 5) {
    paintClue(' "The game is over". ');
  }
};

const writeAttempts = () => {
  userAttempts.innerHTML = attempts;
};

const increaseAttempts = () => {
  attempts++;
  writeAttempts();
};

const resetAttempts = () => {
  attempts = 0;
  writeAttempts();
};

//FUNCIONES/EVENTOS

const handleClickButton = (event) => {
  event.preventDefault();

  showResultMessage();

  increaseAttempts();
};

mainButton.addEventListener("click", handleClickButton);

const handleClickResetBtn = (event) => {
  randomNumber = getRandomNumber(100);

  resetAttempts();
  paintClue("Escribe el número y dale a prueba");
  form.reset();
};

resetBtn.addEventListener("click", handleClickResetBtn);
