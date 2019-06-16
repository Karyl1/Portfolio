const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const articleJSON = require('./homeArticle.json');
const db = require('../../config/config');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

router.get('/article', (req, res) => {
  res.send(articleJSON);
});

router.get('/test', (req, res) => {
  console.log('worked');
  db.query('SELECT * FROM article', (err, result) => {
    if (err) {
      res.status(500);
    } else {
      res.send(result);
    }
  })
})

module.exports = router;