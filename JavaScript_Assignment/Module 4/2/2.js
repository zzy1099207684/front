

// document.querySelector("#form").addEventListener("submit", async function(e){
//     e.preventDefault();
//     let tmp = e.target();

//     let res = await fetch("https://api.tvmaze.com/search/shows?q="+req);
//     let result = await res.json();
//     console.log(result);
//     console.log(result[0]['show']['name']);
// });


document.querySelector("#query_form").addEventListener("submit",async function(e){
    e.preventDefault();
    let req = document.querySelector("#query").value;
    let res = await fetch("https://api.tvmaze.com/search/shows?q="+req);
    let result = await res.json();
    console.log(result);
    console.log(result[0]['show']['name']);
})



