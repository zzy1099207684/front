// Write a program that prompts the user for the start and end year. The program prints all leap years from the interval given by the user. Printing is done in an unordered list to the HTML document. (3p)

function leapYearForInterval(){
    let startYear = parseInt(document.querySelector("#startYear").value);
    let endYear = parseInt(document.querySelector("#endYear").value);
    result = "";
    for (let i = 0; i < endYear-startYear+1; i++) {
        if(!isLeapYear(startYear+i)){
            continue; 
        }else{
            result +="<li>"+(startYear+i)+"</li>";
        }
    }
    document.querySelector("#result").innerHTML = result;
}
let button = document.querySelector("#button");
button.addEventListener('click',leapYearForInterval);

function isLeapYear(year){
    if(((year % 4) === 0 && (year % 100) != 0) || (year % 400) === 0){
        return true;
    }else{
        return false;
    }
}