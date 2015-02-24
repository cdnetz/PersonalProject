var app = angular.module('personalProject');

app.controller('localHappeningsCtrl', function ($scope, $location, localService, geolocation) {

	$scope.submit= function(){
		$location.path('/preferences/local/results')
		localService.search($scope.localSearchBox).then(function(responce){
			$scope.returnData = responce.data;
		})
	}


}) 

