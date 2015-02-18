var User = require('./../models/usersModel');
var Q = require('q');

module.exports = {
	findOrCreate: function (googleProfile) {
		console.log(googleProfile);
		var dfd = Q.defer();
		var queryObject = {googleId: googleProfile.id};
		var updateObject = {
					name: googleProfile.displayName,
					googleId: googleProfile.id,
					plusLink: googleProfile._json.link,
					picture: googleProfile._json.picture
				};
		var optionsObject = {
				upsert: true
		};
		User.findOneAndUpdate(queryObject, updateObject, optionsObject, function (err, result) {
			if (err) {
				dfd.reject(err);
			} else {
				dfd.resolve(result);
			}
		})
		return dfd.promise;
	}	
	
}