'use strict';

/**
 * @ngdoc function
 * @name superbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the superbApp
 */
angular.module('superbApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.showAlertMessage = function(msg) {
		alert(msg);
	};
  });
