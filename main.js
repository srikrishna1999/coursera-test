(function () {
 'use strict';
 angular.module('MyFirstApp',[])
 .controller('MyFirstController',function($scope)
 {
    $scope.name;
    $scope.SayHello = function() {
      return "Hello " + $scope.name;
    };
 });

})();
