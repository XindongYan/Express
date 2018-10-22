var db = require('../models/text')

exports.article = async (req, res) => {
    let text = req.body.text;

    if (text == '')
        return res.render('error', { message: '400', error: '不可为空' })

    var day = new Date().getDate()
    var mon = new Date().getMonth()
    var hours = new Date().getHours()
    var min = new Date().getMinutes()
    var year = new Date().getFullYear()

    let data = {
        time: new Date(),
        create_time: year + '年' + mon + '月' + day + '日' + ' ' + hours + '时' + ':' + min + '分',
        text: text
    };

    console.log(data)

    var result = await db.Article.create(data)
    if (!result) {
        return res.render('index', {error: '上传失败'});
    }

    var task = await db.Article.find({}).sort({time: -1})
    if (!task) {
        return res.render('index', { error: '数据获取失败' })
    }
    return res.render('index', {topic:task});
}