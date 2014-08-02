'use strict';

/* Filters */
var jzFilters = angular.module('jzFilters', ['ngRoute']);



angular.module('jzFilters', []).filter('platform', function() {
  return function(input) {
  	switch(input){
  		case "iOS":
  			input = "fa fa-apple";
  			break;
  		case "Android":
  			input = "fa fa-android";
  			break;
  		case "web":
  			input = "fa fa-html5";
  			break;
  		case "branding":
  			input = "fa fa-picture-o";
  			break;
      case "code":
        input = "fa fa-code";
        break;
  		default:
  	};
    return input;
  };
});
