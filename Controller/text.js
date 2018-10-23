var db = require('../models/text')

exports.article = async (req, res) => {
    let text = req.body.text;

    if (text == '')
        return res.render('error', { message: '400', error: '不可为空' })

    var date = new Date();
    var day = date.getDate()
    var mon = date.getMonth()
    var hours = date.getHours()
    var min = date.getMinutes()
    var year = date.getFullYear()

    let data = {
        time: new Date(),
        create_time: year + '年' + mon + '月' + day + '日' + ' ' + hours + '时' + ':' + min + '分',
        text: text
    };

    console.log(data)

    var create = db.Article.create(data);
    var task = db.Article.find({}).sort({time: -1})

    var result = await Promise.all([create, task])
    if (!result) {
        return res.render('index', { error: '数据获取失败' })
    }
    return res.render('index', {topic:result[1]});
}