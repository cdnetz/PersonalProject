var app = angular.module('personalProject');

app.service('loginService', function ($http, $q) {
	
	
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
