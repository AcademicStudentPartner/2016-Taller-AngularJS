'use strict'
 /**
 * @ngdoc Service
 * @author Antony Durán Hernández, Marcos Rodríguez Ovares
*  @name ASPStore
*    loginService
 * @description
 * #  servicio de ingreso al sistema
 */

angular.module('ASPStore').factory('loginService', function() {
	var defaultUser = "";
	var defaultPassword = "";
	var getUserInfo = function () {
		return {
			username: defaultUser,
			password: defaultPassword
		};
	};

	return {
		getUserInformation: getUserInfo
		};
    }
);
