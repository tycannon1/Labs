function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function power(num1, num2) {
  return num1 ** num2;
}
function mod(num1, num2) {
  return num1 % num2;
}
function sqrt(num1) {
  return num1 ** 0.5;
}
function factorialize(num1) {
  let total = num1;

  // if (num1 === 0 || num1 === 1) return 1; 
  
  while (num1 > 1) { 
    num1--;
    total = total * num1;
  };
  return total;
}


function calculate(expressions) {

  const tokens = expressions.split(' ');
  
  let num1;
  let operator;
  let num2;

  if (tokens.length === 3) {
    operator = tokens[1];
    num1 = Number(tokens[0]);
    num2 = Number(tokens[2]);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      return('THAT IS NOT A NUMBER');
      
    }

  } else if (tokens.length === 2) {
    operator = tokens[0];
    num1 = Number(tokens[1]);

    if (Number.isNaN(num1)) {
      return('THAT IS NOT A NUMBER DING BAT');
    } 

  } else {
      return('Invalid expression! Try again.');
  
  }

  // const operator = tokens[1];
  // const num1 = Number(tokens[0]);
  // const num2 = Number(tokens[2]);

  // if (Number.isNaN(num1) || Number.isNaN(num2)) {
  //   return('THAT IS NOT A NUMBER DING BAT');
  //   ;
  // }


  if (operator === '+'){
    return add(num1, num2);
  }
  if (operator === '-'){
    return subtract(num1, num2);
  }
  if (operator === '*'){
    return multiply(num1, num2);
  }
  if (operator === '/'){
    return divide(num1, num2);
  }  
  if (operator === '^'){
    return power(num1, num2);
  } 
  if (operator === '%') {
    return mod(num1, num2);
  } 
  if (operator === 'sqrt') {
    return sqrt(num1);
  } 
  if (operator === '!') {
    return factorialize(num1);
  }
  alert('Unrecognized operator.');
}






/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
