var app = angular.module('personalProject');

app.controller('mainCtrl', function ($scope, loginService) {
	loginService.updateUser().then(function(user){
		$scope.user = user;
		console.log($scope.user);
	})
	
})