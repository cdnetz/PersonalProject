var app = angular.module('personalProject');

app.controller('loginCtrl', function ($scope, loginService) {
	
	$scope.test = 'this is a test';

	var validateUser = function(){
		loginService.getUser().then(function (data) {
			$scope.user = data;
		})
	}

	validateUser();
})