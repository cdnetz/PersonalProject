var GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || 'AIzaSyDZKgxx6tkczhKrFzfWnexqMhqe5gMNRDs';
var GOOGLE_PLACES_OUTPUT_FORMAT = "json";
var GooglePlaces = require("googleplaces")
var googlePlaces = new GooglePlaces('AIzaSyDZKgxx6tkczhKrFzfWnexqMhqe5gMNRDs', process.env.json);



module.exports = {

	someCallback: function(req, res){
	var parameters;
	//*
	 //* Text search - https://developers.google.com/places/documentation/#TextSearchRequests
	 // //from front end
	 // // {
	 // 	query: "Target",
	 // 	radius: 50000,
	 // 	location: {
	 // 		lat: 40.33,
	 // 		lng: -111.52
	 // 	}
	 // }
	parameters = {
	  query: req.body.query

	};
	googlePlaces.textSearch(parameters, function (error, response) {
	  if (error) throw error;
	  console.log(response.results);
	});
	}
	
}