var User = require('./../models/userModel');
var Q = require('q');

module.exports = {
	createLogin: function (user) {
		console.log(user);
		var dfd = Q.defer();
		User.findOne({ googleId: user.id} function (err, result) {
			
			if (result) {
				User.update({ _id: result._id}, {
					name: user.displayName,
					plusLink: user._json.link,
					picture: user._json.picutre
				}, function(err, result){
					if(err) {
						return dfd.reject(err);
					} else {
						dfd.resolve(result);
					}
				})
			} else {
				User.create({
					googleId: user.id,
					name: user.displayName,
					plusLink: user._json.link,
					picutre: user._json,picture
				}, function(err, result){
					if(err){
						return dfd.reject(err);
					} else {
						deferred.resolve(results);
					}
				})
			}

			if(err){
				return dfd.reject(err);
			}
		})
	}	
	return dfd.promise;
}