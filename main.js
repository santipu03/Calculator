
// DOM variables
const buttons = document.querySelectorAll(".button");
const resultScreen = document.querySelector(".result");
const litleScreen = document.querySelector(".operations");


// General variables
let num1 = "";
let num2 = "";
let operator;
let operatorDone = false;
let solution;


// Functions to do the maths
const add = (a,b) => parseInt(a) + parseInt(b);
const subtract = (a,b) => parseInt(a) - parseInt(b);
const multiply = (a,b) => parseInt(a) * parseInt(b);
const divide = (a,b) => parseInt(a) / parseInt(b);


// Function that takes the operator and both numbers, calls the correct function and return the result
const operate = (operator,a,b) => {
    if (operator == "+") {
        return add(a,b)
    } else if (operator == "-"){
        return subtract(a,b);
    } else if (operator == "/"){
        if (b == 0){
            alert("You canot divide by zero idiot!");
            resetCalculator();
            return "";
        }
        return divide(a,b);
    } else if (operator == "*"){
        return multiply(a,b);
    }
};


// Function to display the numbers in the calculator screen
const displayScreenNumbers = (number) => {
    // operatorDone means that num1 is already defined and we've clicked the operator to define num2
    if (operatorDone){
        num2 += number;
        resultScreen.textContent = num2;
    } else {
        num1 += number;
        resultScreen.textContent = num1;
    };
};


// When we click some operator, move the first part of the operation to the top, let the bottom clear and turn on operatorDone
const DisplayScreenOperators = () => {
    litleScreen.textContent = num1 + " " + operator;
    resultScreen.textContent = "";
    operatorDone = true;
    
};


// Check that we have both numbers, call operate() to make the operation, display it in the screen and change the variables in case we want to do more operations with the solution
const displaySolution = () => {
    if (num1 === "" || num2 === ""){
        console.log("shiiit")
        return;
    };
    solution = operate(operator,num1,num2);
    resultScreen.textContent = solution;
    litleScreen.textContent += ` ${num2}`;
    num1 = solution;
    num2 = "";
};


// Delete the last number we have when we click the "C" button
const deleteNumber = () => {
    if (operatorDone){
        num2 = num2.slice(0,-1);
        resultScreen.textContent = num2;
    } else {
        num1 = num1.slice(0,-1);
        resultScreen.textContent = num1;
    }
}


// Reset the screen and the variables when we click the "AC" button
const resetCalculator = () => {
    resultScreen.textContent = "";
    litleScreen.textContent = "";
    num1 = "";
    num2 = "";
    operatorDone = false;
    operator = "";
}


// For each button on the calculator
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (!isNaN(e.target.textContent)){
            displayScreenNumbers(e.target.textContent.toString());  

        } else if (e.target.textContent == "*" || e.target.textContent == "+" || e.target.textContent == "-" ||e.target.textContent == "/"){
            operator = e.target.textContent;
            DisplayScreenOperators();

        } else if (e.target.textContent == "="){
            displaySolution();

        } else if (e.target.textContent == "AC"){
            resetCalculator();

        } else if (e.target.textContent == "C") {
            deleteNumber();
        };
    });
});




