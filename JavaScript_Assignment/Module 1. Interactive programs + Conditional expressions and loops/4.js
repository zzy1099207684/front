// In the Harry Potter children's books, the sorting hat assigns a new student at Hogwarts School of Witchcraft and Wizardry to one of the four classes, which are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw. Write an electronic sorting hat that asks for a student's name and draws a room for him. If you enter Anna as the name, for example, the program prints to the HTML document "Anna, you are Ravenclaw." (3p)

document.addEventListener("DOMContentLoaded", function(){

    studentName = prompt("input your name");
    randitNum = Math.floor(Math.random() * 4) + 1;
    console.log(randitNum)
    studentClass = "";
    if(randitNum === 1){
        studentClass = "Gryffindor";
    }else if(randitNum === 2){
        studentClass = "Slytherin";
    }else if(randitNum === 3){
        studentClass = "Hufflepuff";
    }else if(randitNum === 4){
        studentClass = "Ravenclaw";
    }
    document.querySelector("#choices").innerHTML=studentName+", you are "+studentClass+".";
});