async function test1(){
    console.log(11111111111111111);
    let data={
        body:JSON.stringify({
            q:2
        }),
        method:'POST',
        Headers:{
            'Content-type':'application/json'
        }
    }
    let res = await test2(data);
    console.log(res);
    setInterval(console.log(22222222222222222), 1000);
}

async function test2(data){
    let response = await fetch("https://api.tvmaze.com/search/shows",data);
    if (!response.ok) throw new Error(""); 
    let results = await response.json();
    return results;
}

let b = document.getElementById("button");
b.addEventListener('click',test1);