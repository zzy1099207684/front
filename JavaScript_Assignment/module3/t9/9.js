











function calculate(){
    const calculation =document.querySelector("#calculation").value;
    let calList = calculation.split(',');
    let result = [];
    let elList;
    for (let index = 0; index < calList.length; index++) {
        let element = calList[index];
        console.log(element.includes('+'))
        if (element.includes('+')){
            elList = element.split('+');
            result.push(parseInt(elList[0])+parseInt(elList[1]));
        }else if (element.includes('-')){
            elList = element.split('-');
            result.push(parseInt(elList[0])-parseInt(elList[1]));
        }else if (element.includes('*')){
            elList = element.split('*');
            result.push(parseInt(elList[0])*parseInt(elList[1]));
        }else if (element.includes('/')){
            elList = element.split('/');
            result.push(parseInt(elList[0])/parseInt(elList[1]));
        }
        document.querySelector("#result").innerHTML = result;
    }

}

document.querySelector("#start").addEventListener('click',calculate);