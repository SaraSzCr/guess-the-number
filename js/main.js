"use strict";

//QUERY SELECTOR

const mainButton = document.querySelector(".js_button");
const userInput = document.querySelector(".js_inputNumber");
const paragraphResult = document.querySelector(".js_paragraphResult");
const userAttempts = document.querySelector('.js_attempts');


//FUNCIONES

let attempts = 0;

paragraphResult.innerHTML = "Pista: Escribe el número y dale a prueba";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);

//parseInt?


const textResult = () => {
  const inputValue = userInput.value;

  console.log(inputValue, randomNumber);

  if (inputValue > randomNumber) {
    paragraphResult.innerHTML = "Demasiado alto";
  } else if (inputValue < randomNumber) {
    paragraphResult.innerHTML = "Demasiado bajo";
  } else if (inputValue >= randomNumber) {
    paragraphResult.innerHTML = "Has ganado campeona!!!";
   } else if (inputValue === randomNumber)  {
    paragraphResult.innerHTML = "El número debe estar entre 1 y 100";
  } else {
    paragraphResult.innerHTML = "El número debe estar entre 1 y 100";
  }
  
};

const numberOfAttempts = () => {
attempts ++;
userAttempts.innerHTML = attempts;
};


//FUNCIONES/EVENTOS

const handleClickButton = (event) => {
  event.preventDefault();

  textResult();

  numberOfAttempts();
};

mainButton.addEventListener("click", handleClickButton);
