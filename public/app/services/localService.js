var app = angular.module('personalProject');

app.service('localService', function ($http, geolocation, $q) {

		var searchResults;

//setting the coordinates, giving them and the search terms to Google Places 

		this.search = function(queryString){
			var dfd = $q.defer();
			geolocation.getLocation().then(function(data){
		    	var coordsArray = [
			       	data.coords.latitude, 
			       	data.coords.longitude
			    ];

		    	var parameters = {
		    		query: queryString,
		    		location: coordsArray
		    	};
			    
			   	$http.post('/places/search', parameters).then(function(response){
			    	console.log(response.data);
			    	searchResults = response.data.results;
			    	dfd.resolve(response.data);
				})
			});
			return dfd.promise;	
		}

		this.giveData = function(){
			return searchResults
		}

});

