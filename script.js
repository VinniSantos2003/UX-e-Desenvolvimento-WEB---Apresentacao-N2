document.addEventListener('DOMContentLoaded', function () {

    const inputNumero = document.getElementById('numero');
    const botaoCalcular = document.getElementById('calcularBtn');
    const areaResultado = document.getElementById('resultado');


    botaoCalcular.addEventListener('click', function () {

        const n = parseInt(inputNumero.value);

        if (isNaN(n) || n < 0) {
            alert("Digite um número válido (0 ou maior).");

            return;
        }
        const resultadoFib = calcularFibonacci(n);
        areaResultado.textContent = resultadoFib;
    });

});

function calcularFibonacci(n) {

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    let a = 0;
    let b = 1;
    let temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}
