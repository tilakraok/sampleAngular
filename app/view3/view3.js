'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', [function() {
	this.number1;
	this.number2;
	this.inCurr = '+';
	this.operator = ['+','-', '*', '/'];
	this.total = function total() {
		switch(this.inCurr) {
			case '+' : 	this.result = parseInt(this.number1) + parseInt(this.number2);
						break;

			case '-' : 	this.result = this.number1 - this.number2;
					 	break;

			case '*' : 	this.result = this.number1 * this.number2;
						break;

			case '/' : 	this.result = this.number1 / this.number2;
						break;
		}
	}
}]);