const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const articleJSON = require('./homeArticle.json');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

router.get('/article', (req, res) => {
  res.send(articleJSON);
  console.log(articleJSON)
});

module.exports = router;