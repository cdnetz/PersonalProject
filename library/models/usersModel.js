var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var userSchema = new Schema ({
	name: {type: String, required: true},
	googleId: {type: String, required: true, unique: true},
	plusLink: String,
	picture: String

})

module.exports = Mongoose.model('User', userSchema);