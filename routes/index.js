var express = require('express');
var router = express.Router();
var text = require('../Controller/text')
var db = require('../models/text.mongo')

/* GET home page. */
router.get('/', async function(req, res, next) {
  var result = await db.Article.find({}).sort({ time: -1 })
  if (!result) {
    return res.render('index', { error: '数据获取失败' })
  }
  return res.render('index', { topic: result })
});

router.post('/', text.article)

module.exports = router;
