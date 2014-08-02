'use strict';


/* Directives */
var jzDirectives = angular.module('jzDirectives', []);

jzDirectives.directive('swiper', function () {
    return {
      restrict: 'A',
      scope: {
        imageData: "=value"
      },
      link: function (scope, element, attrs) {
      	scope.$watch(function() { return scope.imageData; }, function(value) {
          if(!value) return;
          window.mySwipe = new Swipe(document.getElementById("slider"), { speed:200,auto: 3000,continuous: true});         
        });
	
      }
    }
});

jzDirectives.directive('swiperleft', function () {return {
 restrict: 'A',
 link: function (scope, element, attrs) {
  element.bind('click',function (event) {mySwipe.prev()})
  }
}});

jzDirectives.directive('swiperright', function () {return {
 restrict: 'A',
 link: function (scope, element, attrs) {
  element.bind('click',function (event) {mySwipe.next()})
 }
}});