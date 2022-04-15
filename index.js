const e = require("express");
const express = require("express"); //Importando o Express
const app = express(); //Iniciando o Express

app.get("/",function(req, res){
    res.send("<h1>Seja bem vindo ao meu primeiro servidor NodeJS :D</h1>")
})

app.get("/blog/:artigo?", function(req,res){

    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2>Artigo: " + artigo + "</h2>")
    }else{
        res.send("Bem vindo ao meu blog")

    }

})

//Para criar um parâmetro opcional, basta seguir o exemplo da linha 9
//Onde após os caminhos "/blog/:artigo", inserir um sinal de interrogação
//Após isso, fazer uma validação, conforme se inicia na linha 13.

app.get("/youtube", function(req,res){
    res.send("Faaaala pessoal, bem vindo ao meu canal. =)")
});

app.get("/ola/:nome/:empresa", function(req,res){
    //REQ => Dados enviados pelo usuário
    //RES => Resposta que será enviada p/ o usuário
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Olá, " + nome + ',' + ' da empresa ' + empresa + "</h1>")
})

//Para criarmos parâmetros no Node, precisamos seguir o exemplo da linha 30
//Onde designamos o caminho "/ola/", após o '/', precisamos colocar dois pontos ':'
//E em seguida, o parâmetro que desejamos inserir, conforme colocado no exemplo citado.

app.listen(4000, function(erro){
 if(erro){
     console.log('Ocorreu um erro...')
 }else{
     console.log("Servidor iniciado com muito sucesso!")
 }
});

