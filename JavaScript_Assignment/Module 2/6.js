// Write a function that returns a random dice roll between 1 and 6. The function should not have any parameters. Write a main program that rolls the dice until the result is 6. The main program should print out the result of each roll in an unordered list (<ul>). (2p)

'use strict';
function main(){
    let result = "";
    let num = null;
    while(num !== 6){
        num = rollDice(1,7);
        result+="<li>"+num+"</li>";
    }
    document.querySelector("#result").innerHTML = result;
}

function rollDice(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener('DOMContentLoaded',main);

