
var valor_hora = document.querySelector("#valor-hora");
var horas_projeto = document.querySelector("#horas-projeto");

var total = document.querySelector("#resposta");

function calcular() {
    var result = valor_hora.valueAsNumber * horas_projeto.valueAsNumber; 
    total.textContent = "R$ " + result;
}