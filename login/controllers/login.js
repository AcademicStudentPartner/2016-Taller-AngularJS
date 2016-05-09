'use strict';

/**
 * @ngdoc function
 * @author Antony Durán Hernández, Marcos Rodríguez Ovares
 * @name ASPStore.controller:LoginCtrl
 * @description
 * # MainCtrl
 * Controller of ASPStore
 */
angular.module('ASPStore')
  .controller('LoginCtrl',  function($scope, $location, $localStorage) {
  	//$scope.userId = undefined;
  	$scope.login = function (uId, pass) {
        angular.forEach($localStorage.usersArray, function(value, key) {
          if(uId == value.username && pass == value.password){
            $localStorage.currentUser = value;
            $location.path('/dashboard/dashboard');
          }
        });
  	};

  });
