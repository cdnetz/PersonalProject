var app = angular.module('personalProject');

app.service('resultsService', function ($http) {
	this.gamesResServ = function (timeAmt) {
		switch (timeAmt){
			case 'fifteen' :
				var gameMessage = 'If you have only 15 minutes, here is some of the latest mobile games you could play-'
				var games = ['Crossy Road' , 'Hundreds' , 'Puzzlejuice']
			break;
			case 'thirty' :
				var gameMessage = 'You could play If you have only 30 minutes, here is some of the latest mobile games you could play - ';
				var games = ['Harthstone, heroes of warcraft', 'Scribblenauts Remix', 'The Room' , 'Kingdom Rush: Origins'];
			break;
			case 'sixty' :
			case 'ninty' : 
			case 'onetwenty' :
				var gameMessage = 'Two great iPad games that will take up longer than an hour are -';
				var games = ['FTL - Faster Than Light', 'Civilization: Revolution'];
			break;

		}
		var gameObj = {
		message: gameMessage,
		gamesArr: games
		};
		return gameObj;
	}
	this.outdoorResServ = function(timeAmt) {
		switch (timeAmt){
			case 'fifteen' :
			case 'thirty' :
				var outdoorMessage = 'Here is some outdoor-sy things you can do in 15 or 30min- ';
				var outdoorActivites = ['go for a run', 'walk your dog', 'go for a walk'];
			break;
			case 'sixty' :
			case 'ninty' :
				var outdoorMessage = 'Here is some outdoor-sy things you can do in 	60 or 90min- ';
				var outdoorActivites = ['go bird watching' , 'go for a hike' , 'go to an ourdoor mall' , 'go to the park and have a picknick'];
			break;
			case 'onetwenty' :
				var outdoorMessage = 'Here is some outdoor-sy things you can do in two hours- '	
				var outdoorActivites = ['Eat at an outdoor resturant' , 'Long bike ride' , 'Read a book under a tree'];
			break;

		}
		var outdoorObj = {
			message : outdoorMessage,
			outdoorArr : outdoorActivites
		};
		return outdoorObj;
	}
	this.tvResServ = function(timeAmt) {
		switch (timeAmt){
			case 'fifteen' :
				var tvMessage = 'Here is some shows that you can watch in 15 min- ';
				var tvActivities = ['Robot Chicken'];
			break;
			case 'thirty' :
				var tvMessage = 'Heres some shoes you can watch in 30 min - ';
				var tvActivities = ['Archer' ];
			break;
			case 'sixty' :
			case 'ninty' :
			case 'onetwenty' :
				tvMessage = "Heres what you could watch in an hour plus - ";
				var tvActivities = ['Justified' , 'The Americans' , 'Mad Men', 'Breaking Bad'];
			break;
		}
		var tvObj = {
			message : tvMessage,
			tvArr : tvActivities
		};
		return tvObj;

	}
	this.randomWebResServ = function(timeAmt) {
		switch (timeAmt) {
			case 'fifteen' :
				var randomWebMessage = 'Here is some random timewaster websites that will take up 15 of your time- ';
				var randomWebActivites = ['stumbleupon '];
			break;
			case 'thirty' :
				var randomWebMessage = 'Here is some random timewaster websites that will take up 30 of your time- ';
				var randomWebActivites = ['Sporcle', 'buzzfeed'];
			break;
			case 'sixty' :
			case 'ninty' :
			case 'onetwenty' :
				var randomWebMessage = 'Here is some random timewaster websites that will take up an hour of your time or more- ';
				var randomWebActivites = ['reddit'];
			break;
		}
		var randomWebObj = {
			message : randomWebMessage,
			randomWebArr : randomWebActivites
		};
		return randomWebObj;
	}
})