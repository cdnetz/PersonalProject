var app = angular.module('personalProject');

app.service('localService', function ($http, geolocation) {
	this.coords = geolocation.getLocation().then(function(data){
    	
       	var coordsObj = {
       		lat:data.coords.latitude, 
       		long:data.coords.longitude
       	};

    return coordsObj;

    })

	
})