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
    res.json(obj)  
    //passamos assim pra pra ao invés de usar o JSON Stringfy ele ja interptera
    //o JSOn, no caso o obj
    //------
  });

  
});
router.get('/:id', function(req, res, next) {//ja temos uma rota pra / que ta dentro do arquivo users.js
  client.get(`/users/${req.params.id}`, function(err, request, response, obj) { //criamos aqui a chamada do client na rota users
    //que busca as informações dentro da mesma, noc aso os users do rest-api
    assert.ifError(err);
    res.json(obj) 
    //passamos assim pra pra ao invés de usar o JSON Stringfy ele ja interptera
    //o JSOn, no caso o obj
    //------
    //toda vez que chamaram / vao chamar também a barra users
  });


  
});



router.put('/:id', function(req, res, next) {//ja temos uma rota pra / que ta dentro do arquivo users.js
  client.put(`/users/${req.params.id}`, req.body/*Vamos pegar as informações dentro do req, no caso o json**/ ,function(err, request, response, obj) { //criamos aqui a chamada do client na rota users
    //que busca as informações dentro da mesma, noc aso os users do rest-api
    assert.ifError(err);
    res.json(obj) 
    //passamos assim pra pra ao invés de usar o JSON Stringfy ele ja interptera
    //o JSOn, no caso o obj
    //------
    //toda vez que chamaram / vao chamar também a barra users
  });


  
});

router.delete('/:id', function(req, res, next) {//ja temos uma rota pra / que ta dentro do arquivo users.js
  client.del(`/users/${req.params.id}` ,function(err, request, response, obj) { //criamos aqui a chamada do client na rota users
    //que busca as informações dentro da mesma, noc aso os users do rest-api
    assert.ifError(err);
    res.json(obj) 
    //passamos assim pra pra ao invés de usar o JSON Stringfy ele ja interptera
    //o JSOn, no caso o obj
    //------
    //toda vez que chamaram / vao chamar também a barra users
   
  });


  
});

router.post('/', function(req, res, next) {

  client.post(`/users`, req.body, function(err, request, response, obj) {
      assert.ifError(err);

      res.json(obj);
      Location.reload();
  });

});
/*

router.post('/', function(req, res, next) {//ja temos uma rota pra / que ta dentro do arquivo users.js
  client.post(`/users/` ,req.body,function(err, request, response, obj) { //criamos aqui a chamada do client na rota users
    //que busca as informações dentro da mesma, noc aso os users do rest-api
    assert.ifError(err);
    res.json(obj) 
    console.log(err)
    //passamos assim pra pra ao invés de usar o JSON Stringfy ele ja interptera
    //o JSOn, no caso o obj
    //------
    //toda vez que chamaram / vao chamar também a barra users
  });
});

*/



  

module.exports = router;
