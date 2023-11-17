// Write a program that asks the user for numbers until he gives zero. The given numbers are printed in the console from the largest to the smallest. (2p)

'use strict';
function main(){
    let num = null;
    let arr = new Array();
    while(num !== 0){
        num = parseInt(prompt("input number"));
        if(isNaN(num)){
            continue;
        }
        arr.push(num);
    }
    arr.sort(function (a, b){
        return b - a;
    });
    arr.forEach(element => {
        console.log(element)
    });
}

document.addEventListener('DOMContentLoaded',main);

