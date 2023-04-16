const mongoose = require('mongoose');
const Schema = mongoose.Schema;

attemptsSchema = new Schema( {
    name:String,
    email:String,
    level1:String,
    level2:String,
    level3:String,
    level4:String,
    accuracy:Number,
    date: {
		type: Date,
		default: Date.now
	}
}),
attempts = mongoose.model('attempts',attemptsSchema);

module.exports = attempts;