var db = require('../models/text')

exports.article = (req, res) => {
    let text = req.body.text;

    let data = {
        time: new Date(),
        text: text
    };

    console.log(data)

    db.Article.create(data, (error, result) => {
        if (error) return res.render('index', {error: '上传失败'})
        db.Article.find({}, (err, result) => {
            if(err) return res.render('index', { error: '数据获取失败' })
            return res.render('index',{ topic: result })
        })
        // return res.render('index', {success: '上传成功'})
    })
}