var express = require('express');
var restify = require('restify-clients') //Dando require no framework restfy
var router = express.Router();

var client = restify.createJSONClient({ //declaração de onde se encontra o serviço do nosso servidor
  //client. no caso rodando no localhost 4000
URL: 'https://localhost:4000'

})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
