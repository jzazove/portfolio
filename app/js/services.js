'use strict';

/* CONSTANTS */
var HEADERS = {
  "X-JZ-API-VERSION": 1, 
  "X-JZ-API-VERSION-CODENAME": "wolves",
  "X-JZ-API-REQUESTTIME": (new Date().getTime()),
};

/* Services */
var jzServices = angular.module('jzServices', ['ngResource']);


jzServices.factory('ProjectsAll', ['$resource',
  function($resource){
    return $resource('/portfolio/data/all.json', {}, {
      get: {method:'GET',  params:{}, isArray:false, headers: HEADERS}
    });
}]);  



jzServices.factory('Project', ['$resource',
  function($resource){
    return $resource('/portfolio/data/api/:id.json', {}, {
      get: {method:'GET',  params:{id:''}, isArray:false, headers: HEADERS}
    });
}]);  
