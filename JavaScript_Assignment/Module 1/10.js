// Make a program that asks the user for the number of dice and the sum of the eye numbers of interest to the user. The purpose of your program is now to find out with what probability the number of dice given by the user produces the sum of the number of eyes given by the user. For example, if the user enters 3 as the number of dice and 17 as the sum of the eyes, the program calculates the probability that the sum of the three dice's eye numbers is 17. (5p)

// Solve the problem by simulating: Have the program roll a given number of dice in a for-loop (e.g. 10,000 times) and calculate what proportion of the repetitions produced the sum of eye numbers of interest to the user.
'use strict';
function main(){
    let diceNumber = parseInt(document.querySelector("#diceNumber").value);
    let eyeNumber = parseInt(document.querySelector("#eyeNumber").value);
    let allGrounp = out(diceNumber);
    eyeTimes = getTargetNum(allGrounp, eyeNumber);
    allTimes = Math.pow(6, diceNumber);
    result = parseFloat((eyeTimes/allTimes)*100).toFixed(2);
    document.querySelector("#result").innerHTML = "Probability to get sum "+eyeNumber+" with "+diceNumber+" dice is "+result+"%";
}


function out(diceNumber){
    let result = [];
    function inside(diceNumber, list){
        if(diceNumber == 0){
            result.push(list);
        }else{
            for (var i = 1; i <= 6; i++) {
                inside(diceNumber-1, list+[i]);
            }
        }
    }
    inside(diceNumber, []);
    return result;
}

function getTargetNum(list, targetNum){
    let count = 0;
    for(key in list){
        let k = 0;
        for (i in list[key]){
            k=k+parseInt(list[key][i]);
        }
        if(k === targetNum){
            count+=1
        }
    }
    return count;
}

document.querySelector("#button").addEventListener('click', main);

console.log(out(2).length);



