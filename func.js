function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

let a = NaN, b = NaN, op, justop = true;

function operate(op, a, b) {
    switch (op) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.textContent === "clear") {
            display.textContent = "";
            a = NaN;
            b = NaN;
            justop = true;
        }
        else if (Number.isInteger(+button.textContent)) {
            if (justop) {
                display.textContent = button.textContent
            } 
            else display.textContent += button.textContent;
            justop = false;
        } 
        else {
            if (!justop) {
                if (isNaN(a)) a = +display.textContent;
                else {
                    b = +display.textContent;
                    a = operate(op, a, b);
                    b = NaN
                }
            }
            op = button.textContent;
            display.textContent = a;
            justop = true;
        }
        
    })
})