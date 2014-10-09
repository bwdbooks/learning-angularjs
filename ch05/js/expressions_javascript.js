angular.module('myApp', [])
  .controller('myController', function($scope) {
    $scope.Math = window.Math;
    $scope.myArr = [1];
    $scope.removedArr = [];
  });