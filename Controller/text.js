var db = require('../models/text.mongo')

exports.article = async (req, res) => {
    var text = req.body.text;
    var pageSize = req.body.pageSize;
    var current = req.body.current;

    var date = new Date();
    var day = date.getDate()
    var mon = date.getMonth()
    var hours = date.getHours()
    var min = date.getMinutes()
    var year = date.getFullYear()

    if (String(hours).length == 1)
        hours = '0' + hours;

    if (String(min).length == 1)
        min = '0' + min;

    if (text == '')
        // return res.render('error', { message: 400, error: '不可为空' })
        return res.render('index', { error: '不可为空，重新上传' });

    let data = {
        time: new Date(),
        create_time: year + '年' + mon + '月' + day + '日' + ' ' + hours + ':' + min,
        text: text
    };

    console.log(data)

    var create = db.Article.create(data);
    var count = db.Article.find({}).count().exec()

    var result = await Promise.all([create, count]);
    if (!result) {
        return res.render('index', { error: '数据上传失败' });
    }

    pageSize || (pageSize = result[1]);
    current || (current = 1);

    var task = await db.Article.find({}).sort({ time: -1 }).skip(pageSize*(current - 1)).limit(pageSize);
    return res.render('index', { topic: task });
}