var app = angular.module('personalProject');

app.directive('bounceDir', function () {
	return {
		restrict: 'AE',
		scope: {
            bounce: '@'
        },
		link: function (scope, element) {
			element.on('mouseenter', function() {

	            element.addClass(scope.bounce);
	            console.log('in mouseenter');
	        });
		}
	}
})