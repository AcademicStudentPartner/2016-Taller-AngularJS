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

    var configs = {method:'GET',url:'http://172.24.3.8:9000/getProducts',params:''};
    var data = null;


    requestService.request(configs, data, function(response){
        console.log(response.success);
        //success
        //data
    });


  });
