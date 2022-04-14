const express = require("express"); //Importando o Express
const app = express(); //Iniciando o Express

app.listen(4000, function(erro){
 if(erro){
     console.log('Ocorreu um erro...')
 }else{
     console.log("Servidor iniciado com muito sucesso! (:")
 }
})

// Para iniciar o servidor, o primeiro passo foi importar o Express

//Em seguida, criamos uma constante para que ela recebesse toda a função do express carregada, conforme a linha 2

//Após isso, iniciamos um servidor, onde executamos o comando `app.listen(4000, function{}...)`
//O número 4000 que vem após o listen, é referente à qual porta será aberta para que nossa aplicação rode

//Já a função, serve para nos avisar caso dê algum erro, tanto que a mesma recebe o parâmetro "erro".