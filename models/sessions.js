const mongoose = require('mongoose');
const Schema = mongoose.Schema;

sessionSchema = new Schema( {

	_id:String,
    expires:Date,
	session: String,
}),
sessions = mongoose.model('sessions',sessionSchema);

module.exports = sessions;