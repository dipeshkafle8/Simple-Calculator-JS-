let buttons = document.querySelectorAll(".items");
let displaydiv = document.getElementById('display');
let operators = document.querySelectorAll('.operator');
let operand1 = 0;
let operator = "";
let isNew = false;

//function for handling event
function eventHandler(value) {

    if (displaydiv.innerText == 0) {
        displaydiv.innerText = "";
    }
    if (isNew == true) {
        displaydiv.innerText = "";
    }
    displaydiv.innerText += value;
    isNew = false;

}


//to handle equal to(=) operator
function handleEqualOperator() {
    let operand2 = parseFloat(displaydiv.innerHTML);
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;

    }
    result = result.toFixed(3);  //upto 3 decimal points
    /*template literals//${}=implicitly converts numbers into string removes unnecessary
      trailing zeros*/
    displaydiv.innerText = `${result}`;
    operand1 = 0;
    isNew = true;
}

//to handle DEl operator
function handleDelOperator() {
    let text = displaydiv.innerText;
    let len = text.length;
    if (len == '1' && text != '0') {
        displaydiv.innerText = 0;
    }
    else if (len != '1') {
        text = text.slice(0, len - 1);
        displaydiv.innerText = text;
    }
}


//function for handling operations
function handleOperations(valueOfOperator) {
    let tempOperator = valueOfOperator;
    if (tempOperator == "DEL") {
        handleDelOperator();
    }
    else if (tempOperator != '=' && tempOperator!='Enter') {
        operand1 = parseFloat(displaydiv.innerText);
        operator = tempOperator;
        isNew = true;
    } else if (tempOperator == '=' || tempOperator == 'Enter') {
        handleEqualOperator();
    }
}

function handleKeyPress(event) {
    let isDigit = Number.isInteger(parseInt(event.key))     //if parseInt is unable to convert in int it will give NaN    
    if (isDigit) {
        eventHandler(event.key);
    }
    else {
        let operatorArr = ['-', '+', '*', '/', '%', '=', 'Enter'];
        let isOperator = operatorArr.indexOf(event.key);
        if (isOperator != -1) {
            handleOperations(event.key);
        }
    }
}





//adding event listeners to digits 
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        eventHandler(event.target.innerText);
    });
})


//function for adding events listeners to the operators
operators.forEach((operatorValue) => {
    operatorValue.addEventListener('click', (event) => {
        handleOperations(event.target.innerText);
    });
})


//Adding eventlisteners for key press for digits    
document.addEventListener('keypress', handleKeyPress);




