// Write a function called even(), which receives an array containing numbers as a parameter. The function returns a second (usually smaller) array which has the even numbers of the original array. The function must not make changes to the original table. (3p)

'use strict';
function main(){
    let arr = [2, 7, 4, 5, 6, 7, 8 ,9, 10, 12];
    document.querySelector("#result").innerHTML = even(arr);
}

function even(numArr){
    let arr = [];
    numArr.forEach(element => {
        if(element%2 === 0){
            arr.push(element)
        }
    });
    return arr;
}

document.addEventListener('DOMContentLoaded',main);

