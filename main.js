
const buttons = document.querySelectorAll(".button");
const resultScreen = document.querySelector(".result");

const displayScreen = (text) => {
    if (text.startsWith("0")){
        console.log("true");
        num1 = num1.split("").splice(1,1).join("");
    }
    resultScreen.textContent = num1;
}


// Number variables
let num1 = 0;
let num2 = 0;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        
        num1 += e.target.textContent.toString();
        console.log(e.target.textContent.toString());
        console.log(num1);
        displayScreen(e.target.textContent);
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




