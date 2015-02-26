var app = angular.module('personalProject');

app.service('loginService', function ($http, $q) {
	
	var user = {};

	this.updateUser = function (){
		return $http.get('/auth/user').then(function(responce){
			user = responce.data;
			return user;
		})
	}
	this.getUser = function() {
		return user;
	}

	
})


