module.exports = function(app) {
    app.get("/app.js",function(req, res) {
        var connection = app.objects.connectionFactory();
        var produtos = new app.objects.ProdutoDao(connection);

        produtos.lista(function(error,results,fields){
            res.render('home/index',{livros:results});
        });
        connection.end();

    });
}