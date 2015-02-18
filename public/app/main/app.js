var app = angular.module('personalProject', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/templates/login.html',
			controller: 'loginCtrl'
		})
		.when('/prefernces', {
			templateUrl: './../templates/prefernces.html',
			controller: './../controllers/preferncesCtrl'
		})
		.when('/time', {
			templateUrl: './../templates/prefernces.html',
			controller: './../controllers/timeCtrl'
		})
		.when('/results', {
			templateUrl: './../templates/results.html',
			controller: './../controllers/resultsCtrl'
		})
		.otherwise('/');
})