// Write a program that asks the user for an integer and tells if the number is a prime number. (2p)
// Prime numbers are numbers that are only divisible by 1 and itself.
// For example, number 13 is a prime number as it can only be divided by 1 or 13 so that the result is an integer.
// On the other hand, number 21 for example is not a prime number as it can be also be divided by numbers 3 and 7.
// Print the result on the HTML document.

function main(){
    let number = parseInt(document.querySelector("#number").value);
    let result;
    if(isPrimeNumber(number)){
        result = document.querySelector("#result").innerHTML = number + " is a prime number";
    }else{
        result = document.querySelector("#result").innerHTML = number + " is not a prime number";
    }
    document.querySelector("#result").innerHTML = result;
}

let button = document.querySelector("#button");
button.addEventListener('click', main);


function isPrimeNumber(number){
    for (let index = 2; index < number; index++) {
        if(number % index == 0){
            return false;
        }
    }
    return true;
}