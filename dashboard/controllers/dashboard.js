'use strict';

/*
GET /getProducts/:user

POST /newProduct/:user
    data:{
      //cuerpo
    }

*/
/**
 * @ngdoc Controller
 * @author Antony Durán Hernández, Marcos Rodríguez Ovares
 * @name ASPStore.controller:DashboardCtrl
 * @description
 * # MainCtrl
 * Controller of ASPStore
 */
angular.module('ASPStore')
  .controller('DashboardCtrl', function($scope, $location, $localStorage, requestService) {

        
   this.nombre = "";
   this.description = "";

   this.productos = undefined;
   this.buscarText = "";
   this.user = "LJRT";
   var data = null;
   var x = this;


   function refreshProducts(){
      var configs = {
           method: 'GET',
           url: 'https://asp-api-ajdurancr.c9users.io/getProducts',
           params: '/' + x.user
      };
      requestService.request(configs, data, function(response){
      x.productos = response.data;
      console.log(x.productos);
      });
    }

    this.addProducts = function (nombre, description){

       var configs = {
            method: 'POST',
            url: 'https://asp-api-ajdurancr.c9users.io/newProduct',
            params: '/' + x.user
       };
       data = {
         nombre: nombre,
         description: description
       }
       requestService.request(configs, data, function(response){
            if(response.success){
              refreshProducts();
            }
            else{
              alert("Error!");
            }
       });
     }
     //this.refreshProducts();

  });
