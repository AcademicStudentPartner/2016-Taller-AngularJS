/**
 * @ngdoc function
 * @name ASPStore
  * @author Antony Durán Hernández, Marcos Rodríguez Ovares
 * @description
 * # RegisterCtrl
 * Controller of ASPStore
 */

'use strict';

angular.module('ASPStore')
  .controller('RegisterCtrl', function($scope, $location,  $localStorage) {

    $scope.username = "";
    $scope.password = "";
    $scope.name = "";
    $scope.age = "";

    $scope.register = function(){
      if($scope.username != "" && $scope.password != ""){
        if($localStorage.userArray == undefined){
          $localStorage.userArray = [{'username':$scope.username,'password':$scope.password,'name':$scope.name,'age':$scope.age}];
        }
        else{
          $localStorage.userArray.push({'username':$scope.username,'password':$scope.password,'name':$scope.name,'age':$scope.age});
        }
        alert("Usuario agregado");
        $location.path('/login');
     }else{
      alert("Datos invalidos");
     }

   }

  });
