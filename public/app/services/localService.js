var app = angular.module('personalProject');

app.service('localService', function ($http, geolocation, $q) {
		// this.coords = function() {
		// 	return geolocation.getLocation().then(function(data){
		    	
		// 	    var coordsObj = {
		// 	       	lat:data.coords.latitude, 
		// 	       	long:data.coords.longitude
		// 	    };
		// 	return coordsObj;
			   
		// });

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
			    	dfd.resolve(response.data);
				})
			});
			return dfd.promise;	
		}
});

