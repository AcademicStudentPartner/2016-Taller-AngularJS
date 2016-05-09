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
  .controller('DashboardCtrl', function($scope, $location, $localStorage,requestService) {

    var configs = {method:'GET',url:'https://asp-api-ajdurancr.c9users.io/getProducts', params:''};
    var data = null;


    requestService.request(configs, data, function(response){
        console.log(response);
        //success
        //data
    });


  });
