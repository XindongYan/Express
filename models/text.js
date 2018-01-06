var mongoose = require('../moogodb')

var Article = new mongoose.Schema({
    time: Date,
    text: String
})

exports.Article = mongoose.model('articles', Article)
