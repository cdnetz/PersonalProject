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

// this.getUser = function(userId){
// var dfd = $q.defer();
// $http.get("/api/getUserData/" + userId).then(function(data){
// dfd.resolve(data.data)
// }, function(err){
// dfd.reject(err)
// })
// return dfd.promise
// }
// resolve: {
// user: function($route, AuthService){
// return AuthService.getUser($route.current.params.id)
// }
// }
