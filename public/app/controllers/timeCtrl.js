var app = angular.module('personalProject');

app.controller('timeCtrl', function ($scope, $routeParams, $location, timeService) {
	$scope.five = function(){
		timeService.fiveServ($routeParams.preference);
	}
		
	$scope.fifteen = function() {
		timeService.fifteenServ($routeParams.preference);
	}
	$scope.thirty = function() {
		timeService.thirtyServ($routeParams.preference);
	}
	$scope.sixty = function () {
		timeService.sixtyServ($routeParams.preference);
	}
	$scope.onetwenty = function () {
		timeService.onetwentyServ($routeParams.preference);
	}
})