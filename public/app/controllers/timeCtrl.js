var app = angular.module('personalProject');

app.controller('timeCtrl', function ($scope, $routeParams, $location) {
	$scope.five = function(){
		if ($routeParams.preference === 'mobile') {
			$location.path('/mobile/fivemin/results');
		}
		else if ($routeParams.preference === 'outdoors') {
			$location.path('/outdoors/fivemin/results');
		}
		else if ($routeParams.preference === 'tv') {
			$location.path('/tv/fivemin/results');
		}
		else if ($routeParams.preference === 'random') {
			$location.path('/random/fivemin/results');
		};
	}
	$scope.fifteen = function() {
		if ($routeParams.preference === 'mobile') {
			$location.path('/mobile/fifteen/results');
		}
		else if ($routeParams.preference === 'outdoors') {
			$location.path('/outdoors/fifteen/results');
		}
		else if ($routeParams.preference === 'tv') {
			$location.path('/tv/fifteen/results');
		}
		else if ($routeParams.preference === 'random') {
			$location.path('/random/fifteen/results');
		};
	}
	$scope.thirty = function
})