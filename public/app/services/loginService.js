var app = angular.module('personalProject');

app.service('loginService', function ($http) {
	
	var user = {};

	this.getUser = function() {
		return $http.get('/auth/user').then(function (res) {
			user = res.data
			console.log(user);
			return user;
		})
	}
})