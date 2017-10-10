var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var videoSchema = Schema({
	title: String,
	url: String,
	description: String
});

module.exports = mongoose.model('video', videoSchema, 'videos');