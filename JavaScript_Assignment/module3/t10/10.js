
document.querySelector("#source").addEventListener('submit',function(e){
    e.preventDefault();
    let result = 'Your name is ';

    let lastname = document.querySelector("[name='lastname']").value; 
    let firstname = document.querySelector("[name='firstname']").value;

    document.querySelector("#target").innerHTML = result+lastname+" "+firstname;

})