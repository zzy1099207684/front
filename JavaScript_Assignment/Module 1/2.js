document.addEventListener('DOMContentLoaded', function(){
    // 2. Write a program that prompts for user's name and then greets the user.
    // Print the result to the HTML document: Hello, Name! (2p)
    var name = prompt("input your name");
    document.querySelector("#output").innerHTML="hello, "+name;
});