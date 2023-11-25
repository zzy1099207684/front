

async function getRes(){
    let q = prompt("input value");
    let res = await fetch("https://api.tvmaze.com/search/shows?q="+q);
    let result = await res.json();
    console.log(result);
    console.log(result[0]['show']['name']);
}

document.addEventListener('DOMContentLoaded',getRes);
