'use strict';

var jzApp = angular.module('jzApp', [
  'ngRoute',
  'ngAnimate',
  'jzControllers',
  'jzFilters',
  'jzServices',
  'jzDirectives'
  ]);


jzApp.config(['$routeProvider', function($routeProvider) {
 //$locationProvider.html5Mode(true);
 $routeProvider.
  when('/', {templateUrl: './app/partials/home.html', controller: 'HomeCtrl'}).
  when('/project/:id', {templateUrl: './app/partials/project.html', controller: 'ProjectCtrl'}).  
  when('/about', {templateUrl: './app/partials/about.html'}).
  when('/404', {templateUrl: './app/partials/errors/404.html'}).
  otherwise({redirectTo: '/404'});

}]);
