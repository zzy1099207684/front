// Write a function called concat(), which receives an array of strings as a parameter. The function returns a string formed by concatenating the elements of the array. (2p)

'use strict';
function main(){
    let arr = ["Johnny", "DeeDee", "Joey", "Marky"];
    document.querySelector("#result").innerHTML = concat(arr);
}

function concat(strArr){
    let result = "";
    strArr.forEach(element => {
        result+=element;
    });
    return result;
}

document.addEventListener('DOMContentLoaded',main);

