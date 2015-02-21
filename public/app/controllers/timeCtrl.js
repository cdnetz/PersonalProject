var app = angular.module('personalProject');

app.controller('timeCtrl', function ($scope, $routeParams, $location, timeService) {
	
		
	$scope.fifteen = function() {
		timeService.fifteenServ($routeParams.preference);
	}
	$scope.thirty = function() {
		timeService.thirtyServ($routeParams.preference);
	}
	$scope.sixty = function () {
		timeService.sixtyServ($routeParams.preference);
	}
	$scope.ninty = function(){
		timeService.nintyServ($routeParams.preference);
	}
	$scope.onetwenty = function () {
		timeService.onetwentyServ($routeParams.preference);
	}
})