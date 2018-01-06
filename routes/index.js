var express = require('express');
var router = express.Router();
var text = require('../Controller/text')
var db = require('../models/text')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Article.find({}, (err, result) => {
    if(err) return res.render('index', { error: '数据获取失败' })
    return res.render('index',{ topic: result })
})
});

router.post('/', text.article)

module.exports = router;
