var app = angular.module('personalProject');

app.controller('localHappeningsCtrl', function ($scope, $location, localService, geolocation) {

	$scope.submit= function(){
		
		localService.search($scope.localSearchBox).then(function(responce){
			
			$location.path('/preferences/local/results');
		})
	}


}) 

