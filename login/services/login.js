'use strict'
 /**
 * @ngdoc Service
 * @author Antony Durán Hernández, Marcos Rodríguez Ovares
*  @name ASPStore
*    loginService
 * @description
 * #  servicio de ingreso al sistema
 */

angular.module('ASPStore').factory('loginService', function($localStorage) {

	var bandera = false;
	var getLogin = function(uId, pass){
		angular.forEach($localStorage.userArray,function(value,key){
			if(uId == value.username && pass == value.password){
				$localStorage.currentUser = value;
				bandera = true;
			}
		});
		return {
			status: bandera
		};
	};

	return {
		getUserLogin: getLogin

	};

});
