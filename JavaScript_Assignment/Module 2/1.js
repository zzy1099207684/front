// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered. Print the result to the console.(2p)
'use strict';
function main(){
    let arr = new Array(5);
    for (let index = 0; index < arr.length; index++) {
        let val = parseFloat(prompt("input No."+(index+1)+" number"));
        arr[index] = val;
    }
    for (let index = arr.length-1; index >= 0; index--) {
        console.log(arr[index]);
    }
}

document.addEventListener('DOMContentLoaded',main);

