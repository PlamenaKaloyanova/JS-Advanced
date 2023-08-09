function getArticleGenerator(input) {
    
    let articles=input;

    return()=>{
        if(articles.length>0){
            let container=document.getElementById('content')
        let article=document.createElement('article')
        let currenttext=articles.shift();
        article.innerText=currenttext;
        container.appendChild(article)
        }
    }
}
