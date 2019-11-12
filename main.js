const util = require("./myUtils.js");

const reader = require("readline-sync");

const numberOne = reader.questionInt("What is your first number? ");
const numberTwo = reader.questionInt("What is your second number? ");

let arrayOfPrimes = [];

for (let i = numberOne; i <= numberTwo; i++){
    if (util.isPrime(i)) {
        arrayOfPrimes.push(i);
    }
}

util.printPrimes(arrayOfPrimes);

