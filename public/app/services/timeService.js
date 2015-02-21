var app = angular.module('personalProject');

app.service('timeService', function ($http, $location) {
	
	this.fifteenServ = function(preference) {
		switch(preference) {
			case 'mobile':
				$location.path('/mobile/fifteen/results');
				break;
			case 'outdoors':
				$location.path('/outdoors/fifteen/results');
				break;
			case 'tv':
				$location.path('/tv/fifteen/results');
				break;
			case 'random':
				$location.path('/random/fifteen/results');
				break;
		}
	}
	this.thirtyServ = function(preference) {
		switch(preference) {
			case 'mobile':
				$location.path('/mobile/thirty/results');
				break;
			case 'outdoors':
				$location.path('/outdoors/thirty/results');
				break;
			case 'tv':
				$location.path('/tv/thirty/results');
				break;
			case 'random':
				$location.path('/random/thirty/results');
				break;
		}
	}
	this.sixtyServ = function(preference) {
		switch(preference) {
			case 'mobile':
				$location.path('/mobile/sixty/results');
				break;
			case 'outdoors':
				$location.path('/outdoors/sixty/results');
				break;
			case 'tv':
				$location.path('/tv/sixty/results');
				break;
			case 'random':
				$location.path('/random/sixty/results');
				break;
		}
	}

	this.nintyServ = function(preference){
		switch(preference) {
			case 'mobile':
				$location.path('/mobile/ninty/results');
				break;
			case 'outdoors':
				location.path('/outdoors/ninty/results');
				break;
			case 'tv':
				location.path('/tv/ninty/results');
				break;
			case 'random':
				location.path('/random/ninty/results');
		}
	}

	this.onetwentyServ = function(preference){
		switch(preference) {
			case 'mobile':
				$location.path('/mobile/onetwenty/results');
				break;
			case 'outdoors':
				$location.path('/outdoors/onetwenty/results');
				break;
			case 'tv':
				$location.path('/tv/onetwenty/results');
				break;
			case 'random':
				$location.path('/random/onetwenty/results');
				break;
		}
	}
})