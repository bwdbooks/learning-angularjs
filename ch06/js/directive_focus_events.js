angular.module('myApp', []).
  controller('myController', function($scope) {
    $scope.inputData = { input1: '', 
                         input2: '' };
    $scope.focusGained = function(input){
      $scope.inputData[input] = '';
    };
    $scope.focusLost = function(event, input){
      var element = angular.element(event.target);
      var value = element.val();
      $scope.inputData[input] = value.toUpperCase();
    };
  });