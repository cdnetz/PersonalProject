var app = angular.module('personalProject');

app.controller('loginCtrl', function ($scope, loginService, $location) {
	
	$scope.user = loginService.user;

	var loginRequired = function($location, $q) {  
	var deferred = $q.defer();

	    if(! userIsAuthenticated()) {
		        deferred.reject()
		        $location.path('/');
		    } else {
		        deferred.resolve()
		    }

	    return deferred.promise;
	}

})