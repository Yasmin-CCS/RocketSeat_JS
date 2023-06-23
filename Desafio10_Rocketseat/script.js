const number1 = Number(prompt('bota um número'));
const number2 = Number(prompt('bota + um número'));
let resposta = ''

function soma(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}

function subtracao(num1, num2) {
  let resultado = num1 - num2;
  return resultado;
};

function multiplicacao(num1, num2) {
  let resultado = num1 * num2;
  return resultado;
};

function divisao(num1, num2) {
  let resultado = num1 / num2;
  return resultado;
};

function resto(num1, num2) {
  let resultado = num1 % num2;
  return resultado;
};

function parouimpar(num1, num2) {
  if (0 == resto(soma(num1, num2), 2)) {
    return 'par'
  } else {
    return 'impar'
  }

}

function comparar(num1, num2) {
  if (num1 == num2) {
    return 'iguais'
  } else {
    return 'diferentes'
  }

}


alert(`A soma dos números é igual a ${soma(number1, number2)}`);
alert(`A subtracao dos números é igual a ${subtracao(number1, number2)} `);
alert(`A multiplicacao dos números é igual a ${multiplicacao(number1, number2)} `);
alert(`A divisao dos números é igual a ${divisao(number1, number2)}`);
alert(`A divisao dos números tem resto igual a ${resto(number1, number2)} `);
alert(`A soma dos números é ${parouimpar(number1, number2)} `);
alert(`Os números são ${comparar(number1, number2)} `);