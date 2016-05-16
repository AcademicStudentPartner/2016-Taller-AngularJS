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
  .controller('LoginCtrl',  function($scope, $location, $localStorage, loginService) {

    $scope.login = function (uId, pass) {
      if(loginService.getUserLogin(uId,pass).status){
        $location.path('/dashboard/dashboard');
      }
      else{
        alert("Usuario invalido");
      }
  	};
  });
