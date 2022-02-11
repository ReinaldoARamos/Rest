var express = require('express');
var restify = require('restify-clients') //Dando require no framework restfy
var assert = require('assert') //Dando require no assert
var router = express.Router();

var client = restify.createJSONClient({ //declaração de onde se encontra o serviço do nosso servidor
  //client. no caso rodando no localhost 4000
url: 'http://localhost:4000'

})
/* GET users listing. */
router.get('/', function(req, res, next) {//ja temos uma rota pra / que ta dentro do arquivo users.js
  client.get('/users', function(err, request, response, obj) { //criamos aqui a chamada do client na rota users
    assert.ifError(err);
    res.end(JSON.stringify(obj, null, 2)) //A resposta vai ser o objeto JSON caso de erro
    //toda vez que chamaram / vao chamar também a barra users
  });
});

module.exports = router;
