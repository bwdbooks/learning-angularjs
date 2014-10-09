angular.module('myApp', [])
.controller('myController', function ($scope) {
  $scope.mColors = ['red', 'green', 'blue'];
  $scope.myColor = '';
  $scope.hits = 0;
  $scope.misses = 0;
  $scope.changes = 0;
  $scope.myObj = {color: '', hits: '', misses: ''};
  $scope.setColor = function (color){
    $scope.myColor = color;
  };
  $scope.hit = function (){
    $scope.hits += 1;
  };
  $scope.miss = function (){
    $scope.misses += 1;
  };
  $scope.$watch('myColor', function (newValue, oldValue){
    $scope.myObj.color = newValue;
  });
  $scope.$watchGroup(['hits', 'misses'], function (newValue, oldValue){
    $scope.myObj.hits = newValue[0];
    $scope.myObj.misses = newValue[1];
  });
  $scope.$watchCollection('myObj', function (newValue, oldValue){
    $scope.changes += 1;
  });
});