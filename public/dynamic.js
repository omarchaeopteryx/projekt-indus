// Code for simulating translation into Indus script.
// By O.A.M. 2017 @ omarcodex

let userInput = document.getElementById('user-typed-input');
let userOutput = document.getElementById('user-typed-output');
document.getElementById('user-typed-input-btn').addEventListener('click', translateText);

function translateText(e) {
  userOutput.innerHTML = ''; // Resetting the field.
  e.preventDefault();
  let userTranslatedText = userInput.value;
  let alteredText = userTranslatedText.split('');
  console.log(alteredText);

  alteredText.map(function(i) {
    console.log(i);
    let glyf = document.createElement('div');
    glyf.innerHTML = "<h1 class='glyph'>" + i + '</h1>';
    console.log(glyf);
    userOutput.append(glyf);
  });

  // userOutput.innerHTML = finalText;
  // userOutput.classList.add('glyph');
  // userOutput.innerText = userTranslatedText;
}
