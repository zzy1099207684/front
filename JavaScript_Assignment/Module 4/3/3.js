document.querySelector("#query_form").addEventListener("submit",async function(e){
    e.preventDefault();
    let nameInput = document.querySelector("#query").value;
    let res = await fetch(`https://api.tvmaze.com/search/shows?q=${nameInput}`);
    let resultJson = await res.json();
    let results = document.querySelector("#results");
    results.innerHTML='';
    if(resultJson){
        resultJson.forEach(element => {
            let name = document.createElement('h2')
            if(name){
                name.innerHTML = element['show']['name'];
            }
            let url = document.createElement('a');
            if(url){
                url.innerHTML = "link";
                url.setAttribute('href',element['show']['url']);
                url.setAttribute('target',"_blank");
            }
            let img = document.createElement('img');
            if(img){
                let s = element.show.image?.medium;
                img.setAttribute('src',element.show.image?.medium);
                img.setAttribute('alt', element.show?.name);
            }
            let summary = document.createElement('div')
            if(summary){
                summary.innerHTML = element.show?.summary;
            }
            let article = document.createElement('article');
            
            article.append(name,url,img,summary);
            results.appendChild(article);
        });
    }
})