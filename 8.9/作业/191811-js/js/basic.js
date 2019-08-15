let heightInCenti = document.getElementById("heightCentimeter");
let weightInKilo = document.getElementById("weightKilogram");
let heightInMeter = heightInCenti / 100;
let bmiResult = weightInKilo / (heightInMeter ^ 2);

function fn() {
  // debugger
  console.log(heightInCenti.value, weightInKilo.value)
}

