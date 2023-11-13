// Write a program that prints the text "Should I calculate the square root?" in a confirmation window. If the user selects OK, the program asks for the number and calculates and prints its square root to the HTML document. If the user selects Cancel, the program prints the text "The square root is not calculated." to the HTML document (3p)

document.addEventListener('DOMContentLoaded', function(){
    let answer = confirm('Should I calculate the square root?');
    let result = "";
    if(answer === true){
        num = prompt("input a number");
        // You cannot calculate the square root of a negative number. If the number entered by the user is negative, the program prints "The square root of a negative number is not defined" to the HTML document.
        num < 0 ? result = "The square root of a negative number is not defined":result = "The square root is "+Math.sqrt(num);
    }else{
        result = "The square root is not calculated.";
    }
    document.querySelector("#result").innerHTML = result;
});