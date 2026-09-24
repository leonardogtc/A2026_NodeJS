const calculadora = require('./calculadora')

console.log(calculadora.nomeModulo);

console.log(calculadora.soma(13, 22));
console.log(calculadora.mult(13, 22));
console.log(calculadora.sub(13, 22));
console.log(calculadora.div(13, 22));

var resultado = calculadora.mult(10, 20)
console.log(resultado);
