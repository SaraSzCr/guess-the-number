"use strict";

//QUERY SELECTOR

const mainButton = document.querySelector(".js_button");
const userInput = document.querySelector(".js_inputNumber");
const paragraphResult = document.querySelector(".js_paragraphResult");
const userAttempts = document.querySelector(".js_attempts");

//VARIABLES

const randomNumber = getRandomNumber(100);

let attempts = 0;

paragraphResult.innerHTML = " Escribe el número y dale a prueba";

//FUNCIONES

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}


const feedbackClue = (message) => {
  paragraphResult.innerHTML = message;
}

const textResult = () => {

  const inputValue = parseInt(userInput.value);
  console.log(inputValue, randomNumber);

  if (isNaN (inputValue)){
    feedbackClue ('El número debe estar entre 1 y 100.');
  }
  else if (inputValue < 1 || inputValue > 100) {
    feedbackClue ('El número debe estar entre 1 y 100.');
  }
  else if (inputValue === randomNumber) {
    feedbackClue ('Has ganado campeona!!!');
  }
  else if (inputValue > randomNumber) {
    feedbackClue(' Demasiado alto.');
  } 
  else if (inputValue < randomNumber) {
    feedbackClue('Demasiado bajo.');
  }  
  
  
};

const writeAttempts = () => {
  userAttempts.innerHTML = attempts;
};

const numberOfAttempts = () => {
  attempts++;
  writeAttempts();
};

//FUNCIONES/EVENTOS

const handleClickButton = (event) => {
  event.preventDefault();

  

  textResult();

  numberOfAttempts();
};

mainButton.addEventListener("click", handleClickButton);
