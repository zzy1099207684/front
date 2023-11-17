// Modify the function above so that it gets the number of sides on the dice as a parameter. With the modified function you can for example roll a 21-sided role-playing dice. The difference to the last exercise is that the dice rolling in the main program continues until the program gets the maximum number on the dice, which is asked from the user at the beginning. (2p)

'use strict';
function main(){
    let result = "";
    let num = null;
    let max = parseInt(document.querySelector("#numberOfSides").value)
    while(num !== max){
        num = rollDice(1,max+1);
        result+="<li>"+num+"</li>";
    }
    document.querySelector("#result").innerHTML = result;
}

function rollDice(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

document.querySelector("#button").addEventListener('click',main);

