var app = angular.module('personalProject');

app.controller('resultsCtrl', function ($scope, $routeParams, resultsService) {
	$scope.gamesRes = function () {
		if ($routeParams.preference === 'mobile') {
			
			$scope.message = resultsService.gamesResServ($routeParams.timeAmt);

		};
	}
	$scope.gamesRes();
	$scope.outdoorsRes = function () {
		if ($routeParams.preference === 'outdoors') {
			$scope.message = resultsService.mobileResServ($routeParams.timeAmt);
		}
	}
	$scope.tv = function() {
		if ($routeParams.preference === 'tv') {
			$scope.message = resultsService.tvResServ($routeParams.timeAmt);
		}
	}
	$scope.random = function() {
		if ($routeParams.preference === 'tv') {
			$scope.message = resultsService.randomResServ($routeParams.timeAmt);
		}
	}
})