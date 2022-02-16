var express = require('express');
var restify = require('restify-clients') //Dando require no framework restfy
var assert = require('assert') //Dando require no assert
var router = express.Router();

var client = restify.createJSONClient({ //declaração de onde se encontra o serviço do nosso servidor
  //client. no caso rodando no localhost 4000
url: 'http://localhost:4000' //Aqui a URL do localhost é requisitada, url essa que contém os usuários
//da rest api

})
/* GET users listing. */
router.get('/', function(req, res, next) {//ja temos uma rota pra / que ta dentro do arquivo users.js
  client.get('/users', function(err, request, response, obj) { //criamos aqui a chamada do client na rota users
    //que busca as informações dentro da mesma, noc aso os users do rest-api
    assert.ifError(err);
    res.end(JSON.stringify(obj, null, 2)) //A resposta vai ser o objeto JSON caso de erro
    //toda vez que chamaram / vao chamar também a barra users
  });
});

module.exports = router;
