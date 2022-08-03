// Define o tipo do retorno
function soma(num1: number, num2: number): number {
  return num1 + num2;
}

//console.log(soma(1, 3));

// Console não retorna nada, logo uma funcão com retorno void
function printaValor(num1: number, num2: number): void {
  console.log(num1 + num2);
}

// ... callback: (passa parametro: de x tipo) => que retorna x tipo ...
function soma_eTrata(num1: number, num2: number, callback: (num: number) => number): number {
  let resultado = num1 + num2;
  return callback(resultado);
}

function aoQuadrado(num: number): number {
  return num * num;
}

function dividirPorEleMesmo(num: number): number {
  return num / num;
}

console.log(soma_eTrata(1, 3, aoQuadrado));
console.log(soma_eTrata(1, 3, dividirPorEleMesmo));