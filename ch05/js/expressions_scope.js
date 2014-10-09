angular.module('myApp', [])
  .controller('myController', function($scope) {
    $scope.speed = 'Slow';
    $scope.vehicle = 'Train';
    $scope.newSpeed = 'Hypersonic';
    $scope.newVehicle = 'Plane';
    $scope.upper = function(aString){
      return angular.uppercase(aString);
    };
    $scope.lower = function(aString){
      return angular.lowercase(aString);
    };
    $scope.setValues = function(speed, vehicle){
      $scope.speed = speed;
      $scope.vehicle = vehicle;
    };
  });