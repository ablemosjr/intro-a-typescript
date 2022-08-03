/*
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";


===================================================================
*/
// 1o tipo de se fazer
let funcionario = {
  code: 10,
  name: 'John'
};

let employee: {code: number, name: string} = {
  code: 10,
  name: 'John'  
}

// 2o tipo de se fazer
interface Employee {
  code: number,
  name: string
}

let funcionario1: Employee = {
  code: 200,
  name: 'John'
}

// 3o tipo de se fazer
const newFuncObj = {} as Employee;
newFuncObj.code = 10;
newFuncObj.name = 'John';