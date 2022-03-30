export * from Test();
class Test{
    static async getArticles() {
        let articlesRes = await fetch("http://localhost:3000/api/products/")
        return articlesRes.json();

    }

    static async getArticle(articlesRes){
        articleRes = articlesRes + this.idProduct 
        return articlesRes.json();
    }
        
}
