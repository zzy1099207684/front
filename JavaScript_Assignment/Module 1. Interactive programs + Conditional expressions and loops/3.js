document.addEventListener("DOMContentLoaded", function(){
    first_num = parseInt(prompt("input first interger: "));
    second_num = parseInt(prompt("input first interger: "));
    thir_num = parseInt(prompt("input first interger: "));

    // Write a program that prompts for three integers. The program prints the sum, product and average of the numbers to the HTML document. (3p)
    // remember to convert strings to numbers when adding
    // sum
    sumNum = first_num + second_num + thir_num;
    document.querySelector("#sumNum").innerHTML = 'sum result is '+sumNum;
    // product
    product = first_num * second_num * thir_num;
    document.querySelector("#product").innerHTML = 'product result is '+product;
    // average of the numbers
    ave = sumNum / 3;
    document.querySelector("#ave").innerHTML = 'average of the numbers is '+ave;

});