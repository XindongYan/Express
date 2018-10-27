var mongoose = require('../moogodb')

var Article = new mongoose.Schema({
    time: Date,
    ip: String,
    create_time: String,
    text: String
})

exports.Article = mongoose.model('articles', Article)
