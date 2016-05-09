/**
 * @ngdoc Service
 * @name ASPStore
 * @author Antony Durán Hernández
 * @description
 * # requestService
 * Servicio de gestión de solicitudes http
 */

'use strict';

angular.module('ASPStore')
.factory('requestService', function ($http) {

      return {
            request: function (data, configs, callback) {
                  return $http(
                          {
                                method: data.method,
                                url: configs.url + data.params,
                                data: data.data
                          })
                          .then(function(response) {
                                callback(response.data);

                          }, 
                          function errorCallback(response) {
                                callback({success: false, data: null});
                });
            }
      };
});
