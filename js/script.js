var ganho_mes = document.querySelector("#ganho-mes");

var qtde_horas = document.querySelector("#horas-dia");

var total = document.querySelector("#resposta");

function calcularValorHora() {
    var horas_mes = qtde_horas.valueAsNumber * 22;
    var valor_hora = (ganho_mes.valueAsNumber / horas_mes).toFixed(2);
    total.textContent = "R$" + valor_hora;
}





