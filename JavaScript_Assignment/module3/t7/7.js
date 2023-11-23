
let trigger = document.querySelector("#trigger");
if(trigger){
    trigger.addEventListener('mouseover', function(){
        let target = document.querySelector("#target");
        if(target){
            target.src = "img/picB.jpg";
        }
    })

    trigger.addEventListener('mouseout', function(){
        let target = document.querySelector("#target");
        if(target){
            target.src = "img/picA.jpg";
        }
    })
}

