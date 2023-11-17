// Write a program that asks for the names of six dogs. The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)

'use strict';
function main(){
    let val = 6;
    let nameArr = new Array(val);
    let result = "";
    for (let index = 0; index < nameArr.length; index++) {
        let nme = prompt("input No."+(index+1)+" dog name");
        nameArr[index] = nme;
    }
    nameArr.sort(function (a, b){
        return b.localeCompare(a);
    });

    for (let index = 0; index < val; index++) {
        result += "<li>"+nameArr[index]+"</li>";
    }

    document.querySelector("#result").innerHTML = result;
}




document.addEventListener('DOMContentLoaded',main);

