'use strict';

/**
 * @ngdoc Controller
 * @author Antony Durán Hernández, Marcos Rodríguez Ovares
 * @name ASPStore.controller:DashboardCtrl
 * @description
 * # MainCtrl
 * Controller of ASPStore
 */
angular.module('ASPStore')
  .controller('DashboardCtrl', function($scope, $location, $localStorage,$http) {

    var ip ='http://172.24.3.8:9000';
    $scope.infoData = [{ "id" : "01", "description" : "Articulo de venta..."}];

    $scope.getProducts = function(name){
      $http.get(ip+'/getProducts').success(function(response){
		      $scope.infoData = response;
		  });
    };

    $scope.getProducts('Marcos');


  });
