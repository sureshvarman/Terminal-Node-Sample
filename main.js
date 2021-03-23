const readline = require("readline");

const getFibonacci = require("./services/fibonacci");
const {arrayToString} = require("./services/parser");

const compose = require("./services/composer");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askInput = function() {
    rl.question("Enter the number to calculate Fibonacci\n", function(inputData) {
        try {
            const number = parseInt(inputData);
    
            const processInput = compose(arrayToString, getFibonacci);
            console.log("Here you go:  ", processInput(number));

            process.exit(0);
        }
        catch(e) {
            console.error("\n Sorry!, Seems the input is invalid, Try again..\n");

            askInput();
        }
    });
}

askInput();



