'use strict';
const names = ['John', 'Paul', 'Jones'];
let result = "";
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    result+="<li>"+element+"</li> ";
}
document.querySelector("#target").innerHTML = result;
