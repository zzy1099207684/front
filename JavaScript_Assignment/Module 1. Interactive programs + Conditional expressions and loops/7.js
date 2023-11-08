// Write a program that rolls user defined number of dice and displays the sum of the results of the dice rolls.(2p)

function displayInfo(){
    diceNumber = parseInt(document.querySelector("#diceNumber").value);
    rollsNumber = parseInt(document.querySelector("#rollsNumber").value);
    let result = "the sum of the results is ";
    for(i=0; i< diceNumber; i++){
        randitNum = 0;
        for(j=0; j< rollsNumber; j++){
            randitNum = Math.floor(Math.random() * 6) + 1;
        }
        result+=randitNum;
    }
    document.querySelector("#result").innerHTML = result;
}
let button = document.querySelector("#button");
button.addEventListener('click',displayInfo)