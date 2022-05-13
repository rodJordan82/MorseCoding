//import englishToMorse from "./morseCode";

import decoder from "./decoder.js";
//above imports object with Morse code pairs

//setting up the reference to the form in index.html
const form  = document.getElementById('form');

//listens for 'submit' to do the translation
form.addEventListener('submit', (event) => {
  //stops 'submit' erasing the details in the form, in index.html
  event.preventDefault();

  let input = document.getElementById("inputField").value;
  //let output = document.getElementById("outputField").innerHTML ;

  document.getElementById("outputField").innerHTML = decoder(input);

});

form.addEventListener('reset', (event) => {

document.getElementById("inputField").innerHTML = '';
document.getElementById("outputField").innerHTML = '';

});