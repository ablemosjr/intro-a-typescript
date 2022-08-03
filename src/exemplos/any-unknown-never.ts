let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;


// Muito usado em objetos quando não se sabe qual o tipo da variável que virá, tendo que tratar
let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';
//stringTest2 = unknownValor;

if(typeof unknownValor === 'string') {
  stringTest2 = unknownValor;
}

// Tipo never e comando throw
function jogaErro(erro: string, codigo: number): void /* never */ {
  throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500);