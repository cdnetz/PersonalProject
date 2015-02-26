var app = angular.module('personalProject');

app.controller('resultsCtrl', function ($scope, $routeParams, resultsService) {

//calling the funcitons from the service, and then setting it to the scope for the view to use

	$scope.gamesRes = function () {
		if ($routeParams.preference === 'mobile') {
			
			var gotBackMobile = resultsService.gamesResServ($routeParams.timeAmt);
			$scope.message = gotBackMobile.message;
			$scope.loopThrough = gotBackMobile.gamesArr;


		};
	}
	$scope.gamesRes();
	$scope.outdoorsRes = function () {
		if ($routeParams.preference === 'outdoors') {
			
			var gotBackOutdoor = resultsService.outdoorResServ($routeParams.timeAmt);
			$scope.message = gotBackOutdoor.message;
			$scope.loopThrough = gotBackOutdoor.outdoorArr;
		}
	}
	$scope.outdoorsRes();
	$scope.tv = function() {
		if ($routeParams.preference === 'tv') {
			var gotBackTV = resultsService.tvResServ($routeParams.timeAmt);
			$scope.message = gotBackTV.message;
			$scope.loopThrough = gotBackTV.tvArr;
		}
	}
	$scope.tv();
	$scope.random = function() {
		if ($routeParams.preference === 'random') {
			var gotBackRandomWeb = resultsService.randomWebResServ($routeParams.timeAmt);
			$scope.message = gotBackRandomWeb.message;
			$scope.loopThrough = gotBackRandomWeb.randomWebArr;
		}
	}
	$scope.random();
})