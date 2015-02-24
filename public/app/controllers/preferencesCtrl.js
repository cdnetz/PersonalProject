var app = angular.module('personalProject');

app.controller('preferencesCtrl', function ($scope, $location) {
	console.log('test');
	$scope.mobile = function() {
		
		$location.path('/mobile/time');
	}

	$scope.outdoors = function() {

		$location.path('/outdoors/time');
	}

	$scope.tv = function() {
		
		$location.path('/tv/time');
	}

	$scope.random = function() {
		
		$location.path('/random/time');
	}

	$scope.localSearch = function() {
		$location.path('/preferences/local');
	}


})