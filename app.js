'use strict';

/**
 * @ngdoc
 * @author Antony Durán Hernández, Marcos Rodríguez Ovares
 * @name ASPStore
 * @description
 * # ASPStore
 *
 * Main module of the application.
 */
angular
  .module('ASPStore', ['ui.router','ngStorage'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/', '/login');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'common/views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'login/views/login.html',
          controller: 'LoginCtrl'
        })
        .state('register', {
          url: '/register/register',
          parent: 'base',
          templateUrl: 'register/views/register.html',
          controller: 'RegisterCtrl'
        })
        .state('dashboard', {
          url: '/dashboard/dashboard',
          parent: 'base',
          templateUrl: 'dashboard/views/dashboard.html',
          controller: 'DashboardCtrl'
        })
  });
