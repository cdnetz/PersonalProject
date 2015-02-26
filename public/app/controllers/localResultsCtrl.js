var app = angular.module('personalProject');

app.controller('localResultsCtrl', function ($scope, localService) {
	$scope.dataBack = localService.giveData();
	console.log($scope.dataBack);
})