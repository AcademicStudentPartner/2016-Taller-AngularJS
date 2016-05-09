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
  .controller('RegisterCtrl', function($scope, $location, $localStorage) {

    $scope.username ="";
    $scope.password ="";

    $scope.register = function(){

      if($scope.username != "" && $scope.password != ""){

        if($localStorage.usersArray === undefined){
          $localStorage.usersArray = [{'username':$scope.username,'password':$scope.password}];
        }else {
          $localStorage.usersArray.push({'username':$scope.username,'password':$scope.password});
        }
        $location.path('/login');

      }else {
        alert("Invalid user information!");
      }
    }

  });
