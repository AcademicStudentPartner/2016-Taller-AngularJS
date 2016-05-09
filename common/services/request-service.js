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
            request: function (configs, data, callback) {
                  return $http(
                          {
                                method: configs.method,
                                url: configs.url + configs.params,
                                data: data
                          })
                          .then(function(response) {
                                callback(response.data);

                          },
                          function errorCallback(response) {
                              console.log(response);
                                callback({success: false, data: null});
                });
            }
      };
});
