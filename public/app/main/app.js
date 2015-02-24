var app = angular.module('personalProject', ['ngRoute' , 'geolocation']);



app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/templates/login.html',
			controller: 'loginCtrl'
		})
		.when('/preferences', {
			templateUrl: 'app/templates/preferences.html',
			controller: 'preferencesCtrl',
			resolve: { loginRequired: function($location, $q, loginService){
					console.log('got here');
					return loginRequired($location, $q, loginService);
				} 
			}
		})
		.when('/preferences/local', {
			templateUrl: 'app/templates/local.html',
			controller: 'localHappeningsCtrl'
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


var loginRequired = function($location, $q, loginService) {  
		// var deferred = $q.defer();
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
})
