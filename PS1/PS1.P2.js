const evaluate = (statement) => (equation) => {
    if (statement.charAt(1) === '+') return (+equation.charAt(0) + +equation.charAt(2));
    else if (statement.charAt(1) === '*') return (+equation.charAt(0) * +equation.charAt(2));
    else if (statement.charAt(1) === '-') return (+equation.charAt(0) - +equation.charAt(2));
    else if (statement.charAt(1) === '/') return (+equation.charAt(0) / +equation.charAt(2));
}



const expression0 = '4+2';
let operator0 = evaluate(expression0);
console.log(`${expression0} = ${operator0(expression0)}`)

const expression1 = '5*7';
let operator1 = evaluate(expression1);
console.log(`${expression1} = ${operator1(expression1)}`)

const expression2 = '6-1';
let operator2 = evaluate(expression2);
console.log(`${expression2} = ${operator2(expression2)}`)

const expression3 = '9/2';
let operator3 = evaluate(expression3);
console.log(`${expression3} = ${operator3(expression3)}`)