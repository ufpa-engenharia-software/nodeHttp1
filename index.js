//importação de pacotes
const express = require('express');
const consign = require('consign');
//inicializa a aplicacao com express
const app = express();
//importa arquivos em subpastas para o index
consign().include("models"). // todos os arquivos na pasta models (representando modelo de dados)
then("libs/middlewares"). // arquivo representando middlewares
then("routes"). // todos os arquivos na pasta routes com os serviços REST
then("libs/boot"). // arquivo representando a inicialização inicial da aplicacao
into(app);

// manda rodar aplicação na porta 3000
app.listen(3000, () => {
	console.log('server started');
});