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

    var configs = {method:'GET',url:'https://asp-api-ajdurancr.c9users.io/getProducts',params:'',
	headers:{
		"Access-Control-Allow-Origin": '*'
		//"access-control-allow-credentials": true,
		//"access-control-allow-headers": x-account, accept, access-control-request-origin
		//"access-control-allow-methods": GET,OPTIONS
	}
	
	};
    var data = null;


    requestService.request(configs, data, function(response){
        console.log(response);
        //success
        //data
    });


  });
