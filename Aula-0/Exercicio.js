var peso = 65;
var altura = 1.80;

var imc = peso / (altura * altura);

console.log("Valor IMC " + imc);

if (imc < 18.5) {
  console.log("Abaixo do peso");
}
else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Normal");
}
else if (imc >= 25 && imc <= 29.9) {
  console.log("Acima do peso");
}
else if (imc >= 30) {
  console.log("Obesidade");
}
