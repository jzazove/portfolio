'use strict';


var jzControllers = angular.module('jzControllers', []);

var UTIL = {
 close: function($scope){$scope.dialog = null},
  errorHandler: function($scope, error){
      $scope.error = true;
      $scope.error_status = error.status;
   }
};

/* home */
jzControllers.controller('HomeCtrl', ['$scope', '$location', 'ProjectsAll', function($scope, $location, ProjectsAll){
	
	ProjectsAll.get({}, 
        function(data){$scope.projects = data.projects},
        function(error){UTIL.errorHandler($scope, error)}
    );
  
}]);

/* project */
jzControllers.controller('ProjectCtrl', ['$scope', '$routeParams', '$location', 'Project', function($scope, $routeParams, $location, Project){
   	Project.get({id: $routeParams.id}, 
        function(data){$scope.project = data},
        function(error){UTIL.errorHandler($scope, error)}
    );  
}]);

