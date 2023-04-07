let num1 = "";
let operator = "";
let num2 = "";
const input = document.querySelector('#input');
function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1 / num2;
}
function operate(input1,operator,input2){
    let ans = "";
    let num1 = Number(input1);
    let num2 = Number(input2);
    if(operator === "/"){
        ans = divide(num1,num2);
    }else if(operator === "x"){
        ans = multiply(num1,num2);
    }else if(operator === "-"){
        ans = subtract(num1,num2);
    }else if(operator === "+"){
        ans = add(num1,num2);
    }else{
        ans = "Error";
    }
    return ans;
}

function display(e){
    let item = e.target.textContent;
    if(input.textContent === "0"){
        input.textContent = "";
    }
    if(item === "="){
        input.textContent = `${input.textContent} = ${operate(num1,operator,num2)}`;
    }else if(item === "+"){
        operator = "+";
        input.textContent = `${input.textContent}${operator}`;
    }else if(item === "-"){
        operator = "-";
        input.textContent = `${input.textContent}${operator}`;
    }else if(item === "x"){
        operator = "x";
        input.textContent = `${input.textContent}${operator}`;
    }else if(item === "/"){
        operator = "/";
        input.textContent = `${input.textContent}${operator}`;
    }else if(item === "AC"){
        operator = "";
        num1 = "";
        num2 = "";
        input.textContent = "0";
    }else{
        if(operator === ""){
            num1 = `${num1}${item}`;
        }else{
            num2 = `${num2}${item}`;
        }
        
        input.textContent = `${input.textContent}${item}`;
    }
    
}

const btn = Array.from(document.querySelectorAll('button'));
btn.forEach(key => key.addEventListener('click', display));