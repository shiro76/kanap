import Produit from "./produit.js";
export default class Articles{
        // Récupération des articles de l'API
    static async getArticles() {
        
        
        let res = await fetch("http://localhost:3000/api/products/" + this.idProduct);
        let articlesRes = await fetch("http://localhost:3000/api/products/");
        if (articlesRes){

            return articlesRes.json();

        }else if (res){
            
            console.log('id', res);
            return res.json();
        }
       
    }

        // Répartition des données de l'API dans le DOM
    static async AddOnPage() {
        let articlesRes = Articles.getArticles.articlesRes; 
        let resultatAPI = await Articles.getArticles(articlesRes);
        console.log('2', resultatAPI);
        await Articles.getArticles(articlesRes)
        .then(function (resultatAPI){

            console.log(resultatAPI);
            const articles = resultatAPI;
            console.table(articles);
            for (let article in articles) {

                // Insertion de l'élément "a"
                let productLink = document.createElement("a");
                document.querySelector(".items").appendChild(productLink);
                productLink.href = `product.html?id=${resultatAPI[article]._id}`;

                // Insertion de l'élément "article"
                let productArticle = document.createElement("article");
                productLink.appendChild(productArticle);

                // Insertion de l'image
                let productImg = document.createElement("img");
                productArticle.appendChild(productImg);
                productImg.src = resultatAPI[article].imageUrl;
                productImg.alt = resultatAPI[article].altTxt;

                // Insertion du titre "h3"
                let productName = document.createElement("h3");
                productArticle.appendChild(productName);
                productName.classList.add("productName");
                productName.innerHTML = resultatAPI[article].name;

                // Insertion de la description "p"
                let productDescription = document.createElement("p");
                productArticle.appendChild(productDescription);
                productDescription.classList.add("productName");
                productDescription.innerHTML = resultatAPI[article].description;
            }
        })
        .catch (function(error){
            return error;
        });
    }
}
function init(){
    Articles.AddOnPage();
}init();



