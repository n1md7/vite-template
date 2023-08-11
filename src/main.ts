import { Calculator } from './Calculator';

const calculator = new Calculator();

calculator.push(2);
calculator.push(3);
calculator.add();

console.log(calculator.result());
