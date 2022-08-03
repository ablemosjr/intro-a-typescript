/*
// Como podemos melhorar o esse código usando TS? 
/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.Trabalho = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.Trabalho = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    Trabalho: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    Trabalho = "padeiro"
}


===================================================================
*/
enum Trabalho {
  Atriz,
  Padeiro
}

interface Pessoa {
  nome: string,
  idade: number,
  Trabalho: Trabalho
}

const pessoa1: Pessoa = {
  nome: 'maria',
  idade: 29,
  Trabalho: Trabalho.Atriz
}

const pessoa2: Pessoa = {
  nome: 'roberto',
  idade: 19,
  Trabalho: Trabalho.Padeiro
}

const pessoa3: Pessoa = {
  nome: 'laura',
  idade: 32,
  Trabalho: Trabalho.Atriz
}

const pessoa4: Pessoa = {
  nome: 'carlos',
  idade: 19,
  Trabalho: Trabalho.Padeiro
}