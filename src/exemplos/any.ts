let valorAny: any;
valorAny = 3;
valorAny = 'ola';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;
let valorString2: string = 'testao';
valorString2 = valorAny;

function sumString(string1: string, string2: string) {
  console.log(string1 + string2);
}

sumString(valorString, valorString2);
sumString('ola ', 'como vai?');