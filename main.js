
const buttons = document.querySelectorAll(".button");
const resultScreen = document.querySelector(".result");
const litleScreen = document.querySelector(".operations");


const displayScreen = (number) => {
    if (operatorDone){
        num2 += number;
        if (num2.startsWith("0")){
            num2 = num2.split("").splice(1,1).join("");
        };
        resultScreen.textContent = num2;
    } else {
        num1 += number;
        if (num1.startsWith("0")){
            num1 = num1.split("").splice(1,1).join("");
        };
        resultScreen.textContent = num1;
    };
}


// Number variables
let num1 = 0;
let num2 = 0;
let operator;
let operatorDone = false;
let solution;


const dealWithOperators = () => {
    litleScreen.textContent = num1 + " " + operator;
    resultScreen.textContent = "";
    operatorDone = true;
    
};




buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (!isNaN(e.target.textContent)){
            if (operatorDone){
                displayScreen(e.target.textContent.toString());
            } else {
                displayScreen(e.target.textContent.toString()); 
            }
        } else {
            if (e.target.textContent == "*" || e.target.textContent == "+" || e.target.textContent == "-" || e.target.textContent == "/"){
                operator = e.target.textContent;
                dealWithOperators();
            } else if (e.target.textContent == "="){
                solution = operate(operator,num1,num2);
                resultScreen.textContent = solution;
                litleScreen.textContent += ` ${num2}`;
                num1 = solution;
                num2 = "";
            } else if (e.target.textContent == "AC"){
                resultScreen.textContent = "";
                litleScreen.textContent = "";
                num1 = 0;
                num2 = 0;
                operatorDone = false;
                operator = "";
            } else if (e.target.textContent == "C") {
                if (operatorDone){
                    num2 = num2.slice(0,-1);
                    resultScreen.textContent = num2;
                } else {
                    num1 = num1.slice(0,-1);
                    resultScreen.textContent = num1;
                }
            }
        }
        
    });
});

const add = (a,b) => parseInt(a) + parseInt(b);
const subtract = (a,b) => parseInt(a) - parseInt(b);
const multiply = (a,b) => parseInt(a) * parseInt(b);
const divide = (a,b) => parseInt(a) / parseInt(b);

const operate = (operator,a,b) => {
    if (operator == "+") {
        return add(a,b)
    } else if (operator == "-"){
        return subtract(a,b);
    } else if (operator == "/"){
        return divide(a,b);
    } else if (operator == "*"){
        return multiply(a,b);
    }
};
