var GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || 'AIzaSyAuvOjiyO78lnupaRdLKvAuWnf_LsCGAx8';
var GOOGLE_PLACES_OUTPUT_FORMAT = "json";
var GooglePlaces = require("googleplaces")
var googlePlaces = new GooglePlaces(GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_OUTPUT_FORMAT);



module.exports = {

	search: function(req, res){
	var parameters = req.body;
	parameters.radius = 300;
	
		
		googlePlaces.textSearch(parameters, function (error, response) {
		  if(error){
		  	res.status(500).json(error)
		  } else {
		  	res.status(200).json(response);
		  }

		});
	}
	
}