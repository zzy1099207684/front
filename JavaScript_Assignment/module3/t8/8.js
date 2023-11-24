
function calculate(){
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let operation = document.querySelector("#operation").value;
    let result = '';
    switch(operation){
        case "add":
            result = num1+num2;
            break;
        case "sub":
            result = num1-num2;
            break;
        case "multi":
            result = num1*num2;
            break;
        case "div":
            result = num1/num2;
            break;
    }
    document.querySelector("#result").innerHTML = result;
}

document.querySelector("#start").addEventListener('click',calculate);
