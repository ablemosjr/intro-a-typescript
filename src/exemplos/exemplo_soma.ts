let btn = document.querySelector('#btn');
let input1 = document.querySelector('#input1') as HTMLInputElement;
let input2 = document.querySelector('#input2') as HTMLInputElement;

let devePrintar: boolean = true;
let frase: string = 'O valor é: ';

function addNum(num1: number, num2: number, devePrintar: boolean, frase: string) {
  let resultado = num1 + num2;

  if(devePrintar) {
    console.log(frase + resultado);
  }
  return num1 + num2;
}

if(btn){
  btn.addEventListener('click', () => {
    if(input1 && input2) {
      console.log(addNum(Number(input1.value), Number(input2.value), devePrintar, frase));
    }
  });
}