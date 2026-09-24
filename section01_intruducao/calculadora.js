var nomeModulo = "Calculadora Versão 01"

function soma(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

// Exports da calculadora
module.exports = { soma, mult, sub, div, nomeModulo }