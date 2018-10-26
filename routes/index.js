var express = require('express');
var router = express.Router();
var text = require('../Controller/text')
var db = require('../models/text.mongo')

/* GET home page. */
router.get('/', async function(req, res, next) {
  var pageSize = req.query.pageSize;
  var current = req.query.current;

  var count = await db.Article.find({}).count().exec()

  pageSize || (pageSize = count)
  current || (current = 1)

  var result = await db.Article.find({}).sort({ time: -1 }).skip(pageSize*(current - 1)).limit(pageSize)
  if (!result) {
    return res.render('index', { error: '数据获取失败' })
  }
  return res.render('index', { topic: result, count })
});

router.post('/', text.article)

module.exports = router;
