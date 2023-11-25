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
            // Use https://via.placeholder.com/210x295?text=Not%20Found as the default image.
            if(img){
                pic = element.show.image?.medium;
                img.setAttribute('src',pic === undefined ? 'https://via.placeholder.com/210x295?text=Not%20Found': pic);
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
}

document.addEventListener('DOMContentLoaded',getRes);