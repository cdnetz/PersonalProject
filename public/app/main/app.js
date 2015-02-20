var app = angular.module('personalProject', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/templates/login.html',
			controller: 'loginCtrl'
		})
		.when('/preferences', {
			templateUrl: 'app/templates/preferences.html',
			controller: 'preferencesCtrl'
			// resolve: {
				//route params 
			// }
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
})