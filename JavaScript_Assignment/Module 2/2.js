// Write a program that asks the user for the number of participants. After this, the program asks for the names of all participants. Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in alphabetical order. (2p)

'use strict';
function main(){
    let val = parseInt(prompt("input number of participants"));
    let nameArr = new Array(val);
    let result = "";
    for (let index = 0; index < nameArr.length; index++) {
        let nme = prompt("input No."+(index+1)+" member name");
        nameArr[index] = nme;
    }
    nameArr.sort();
    for (let index = 0; index < val; index++) {
        result += "<li>"+nameArr[index]+"</li>";
    }

    document.querySelector("#result").innerHTML = result;
}

document.addEventListener('DOMContentLoaded',main);

