(function (){
  'use strict';

  angular.module('helloWorldApp', [])
  .controller('myFirstController', function ($scope){
    $scope.name = "Tetiana";
    $scope.sayHello = function() {
      return "Hello there";
    };
  });

})();
