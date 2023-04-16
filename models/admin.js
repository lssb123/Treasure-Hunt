const mongoose = require('mongoose');
const Schema = mongoose.Schema;

adminSchema = new Schema( {

	adminName: String,
    adminEmail: String,
	password: String,
}),
admin = mongoose.model('admin',adminSchema);

module.exports = admin;