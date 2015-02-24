var app = angular.module('personalProject');

app.controller('localHappeningsCtrl', function ($scope, $location, localService, geolocation) {
	// $scope.localSearchBox;

	$scope.coords = localService.coords();

	console.log(coords.coordsObj.lat);


}) 

