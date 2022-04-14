const express = require("express"); //Importando o Express
const app = express(); //Iniciando o Express

app.get("/",function(req, res){
    res.send("Seja bem vindo ao meu primeiro servidor NodeJS :D")
});

app.get("/blog", function(req,res){
    res.send("Bem vindo ao meu blog")
})

app.get("/youtube", function(req,res){
    res.send("Faaaala pessoal, bem vindo ao meu canal. =)")
})

app.listen(4000, function(erro){
 if(erro){
     console.log('Ocorreu um erro...')
 }else{
     console.log("Servidor iniciado com muito sucesso! (:")
 }
});
