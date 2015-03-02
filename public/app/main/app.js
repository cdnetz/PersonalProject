var app = angular.module('personalProject', ['ngRoute' , 'geolocation']);



app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/templates/login.html',
			controller: 'loginCtrl',
			resolve: { redirectIfAuthenticated: function($location, $q, loginService){
					
					return redirectIfAuthenticated($location, $q, loginService);
				}

			}
		})
		.when('/preferences', {
			templateUrl: 'app/templates/preferences.html',
			controller: 'preferencesCtrl',
			resolve: { loginRequired: function($location, $q, loginService){
					
					return loginRequired($location, $q, loginService);
				} 
			}
		})
		.when('/preferences/local', {
			templateUrl: 'app/templates/local.html',
			controller: 'localHappeningsCtrl'
		})
		.when('/preferences/local/results', {
			templateUrl: 'app/templates/localResults.html',
			controller: 'localResultsCtrl'
		})
		.when('/:preference/time', {
			templateUrl: 'app/templates/time.html',
			controller: 'timeCtrl'
		})
		.when('/:preference/:timeAmt/results', {
			templateUrl: 'app/templates/results.html',
			controller: 'resultsCtrl'
		})
		.otherwise('/');

//route protection for user that is not logged in

	var loginRequired = function($location, $q, loginService) {  
	
		return loginService.updateUser().then(function(user){
			console.log(user);
			if (!user) {
				alert('please login first');
				return $location.path('/')

			}
			else {
				return true;
			}
		})

	}
	
//User hits home and doesn't get redirected to login page if logged in

	var redirectIfAuthenticated = function($location, $q, loginService) {  
    return loginService.updateUser().then(function(user) {
			if (user) {
	        	$location.path('/preferences');
	        } 
		})
	}
})
