/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    const sum = Number(number1) + Number(number2)
    return sum
}

function addNumbers(){
    const firstNumber = document.querySelector('#add1').value
    const secondNumber = document.querySelector('#add2').value
    const sum = add(firstNumber, secondNumber)
    document.querySelector('#sum').value = sum
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)


/* Function Expression - Subtract Numbers */

function subtract (number1, number2) {
    const sub = Number(number1) - Number(number2)
    return sub
}

function subtractNumbers(){
    const firstNumber = document.querySelector('#subtract1').value
    const secondNumber = document.querySelector('#subtract2').value
    const sub = subtract(firstNumber, secondNumber)
    document.querySelector('#difference').value = sub
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)


/* Arrow Function - Multiply Numbers */

const multiply = (factor1, factor2) => Number(factor1) * Number(factor2);

const multiplyNumbers = () => {
    const factor1 = document.querySelector('#factor1').value
    const factor2 = document.querySelector('#factor2').value
    const mul = multiply(factor1, factor2)
    document.querySelector('#product').value = mul
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */

function divide (dividend, divisor) {
    const div = Number(dividend) / Number(divisor)
    return div
}

function divideNumbers(){
    const dividend = document.querySelector('#dividend').value
    const divisor = document.querySelector('#divisor').value
    const div = divide(dividend, divisor)
    document.querySelector('#quotient').value = div
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)

/* Decision Structure */
let today = new Date();
let currentYear = '';
currentYear = today.getFullYear();
document.getElementById('year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
const arrayTimesTwo = numbersArray.map(number => number * 2);
document.querySelector('#sumOfMultiplied').innerHTML = arrayTimesTwo.reduce((sum, number) => sum + number);
