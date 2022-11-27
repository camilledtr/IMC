const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

const form = document.querySelector("form");

form.addEventListener("submit", handleForm);
function handleForm(e) {
  e.preventDefault();

  calculateIMC();
}

var reset_input_values = document.querySelectorAll('input');
for (var i = 0; i < reset_input_values.length; i++) {
  reset_input_values[i].value = '';
}


const inputs = document.querySelectorAll("input");

function calculateIMC() {
  const height = inputs[0].value;
  const weight = inputs[1].value;

  const result = document.querySelector(".result");
  const comment = document.querySelector(".comment");


  if (!height || !weight) {
    console.log('Error');
    result.textContent = 0;
    comment.textContent = "Veuillez rentrer toutes les données"
    return;
  }

  var denom = Math.pow(height / 100, 2);
  res = Math.round(weight * 10 / denom) / 10;



  if (height && weight) {
    result.textContent = res;
    if (res >= 18.5 && res <= 25) {
      comment.textContent = "Vous êtes en bonne santé !";
    }
  }
}


