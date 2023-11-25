async function getRes(){
    let req = prompt("input search requirement");
    let res = await fetch("https://api.tvmaze.com/search/shows?q="+req);
    resultJson = await res.json();
    if(resultJson){
        resultJson.forEach(element => {
            let name = document.createElement('h2')
            if(name){
                name.innerHTML = element['show']['name'];
            }
            let url = document.createElement('a')
            if(url){
                url.innerHTML = element['show']['url'];
                url.setAttribute('herf',element['show']['url'])
            }
            let img = document.createElement('img')
            if(img){
                img.setAttribute('src',element.show.image?.medium);
                img.setAttribute('name', element.show?.name)
            }
            let summary = document.createElement('div')
            if(summary){
                summary.innerHTML = element.show?.summary;
            }
            let creatDiv = document.createElement('div');
            creatDiv.id = 'results';
            let creatArticle = document.createElement('article');
            creatArticle.append(name,url,img,summary,creatDiv)
            document.body.innerHTML='';
            document.body.appendChild(creatArticle);
        });
    }
4}

document.addEventListener('DOMContentLoaded',getRes);