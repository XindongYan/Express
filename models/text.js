var mongoose = require('../moogodb')

var Article = new mongoose.Schema({
    time: Date,
    create_time: String,
    text: String
})

exports.Article = mongoose.model('articles', Article)
