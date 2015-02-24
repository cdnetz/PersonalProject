var app = angular.module('personalProject');

app.controller('loginCtrl', function ($scope, loginService, $location) {
	
	$scope.user = loginService.user;

	
	

})