var app = angular.module('personalProject');

app.service('resultsService', function ($http) {
	this.gamesResServ = function (timeAmt) {
		switch (timeAmt){
			case 'fifteen' :
				var gameMessage = 'If you have only 15 minutes, here is some of the latest mobile games you could play- Desert Golf, Crossy Roads, Hundreds, puzzlejuice ';
				break;
			case 'thirty' :
				var gameMessage = 'You could play If you have only 30 minutes, here is some of the latest mobile games you could play - Harthstone, heroes of warcraft, ';
				break;
			case 'sixty' :
			case 'ninty' : 
			case 'onetwenty' :
				var gameMessage = 'Two great iPad games that will take up longer than an hour are: Civilzation - revolution, and FTL'

		}

		
		return gameMessage;

	}
})