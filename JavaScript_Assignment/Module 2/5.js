// Write a program that prompts the user for numbers. When the user enters one of the numbers he previously entered, the program will announce that the number has already been given and stops its operation and then prints all the given numbers to the console in ascending order. (2p)

'use strict';
function main(){
    let arr = new Array();
    let num = null;
    while(true){
        num = parseInt(prompt("input number"));
        if(isNaN(num)){
            continue;
        }
        if(arr.indexOf(num) === -1){
            arr.push(num);
        }else{
            break;
        }
    }
    arr.sort();
    arr.forEach(element => {
        console.log(element)
    });
}

document.addEventListener('DOMContentLoaded',main);

