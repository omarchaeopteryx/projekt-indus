// Code for simulating translation into Indus script.
// By O.A.M. 2017 @ omarcodex

let userInput = document.getElementById('user-typed-input');
let userOutput = document.getElementById('user-typed-output');
document.getElementById('user-typed-input-btn').addEventListener('click', translateText);

function translateText(e) {
  e.preventDefault();
  console.log('submitted!');
  console.log(userInput.value);
  let userTranslatedText = userInput.value;
  userOutput.classList.add('glyph');
  userOutput.innerText = userTranslatedText;
}
