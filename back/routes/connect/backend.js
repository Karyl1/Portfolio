const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const articleJSON = require('./homeArticle.json');
const connection = require('../../database/accountdb');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

connection.connect(function(err) {
    if(err) 
      console.log('error: ', err.stack);
    else 
      console.log('connected as id: ', connection.threadId);
})

function getArticles(callback) {
  connection.query('SELECT * FROM informations_project', function(error, results) {
    if(error) 
      return callback('Error :', error.stack);
    else 
      return callback(null, results);
  })
}

router.get('/article', (req, res) => {
  /* getArticles(function(err, result) {
    if(err)
      res.status(500).json({ error: err.message });
    else 
      res.json(result);
  }) */
  getArticles(function(error, result) {
    if(error)
      console.log(error);
    else 
      console.log(result);
  })
  res.send(articleJSON);
});

module.exports = router;