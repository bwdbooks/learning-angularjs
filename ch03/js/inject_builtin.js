var myMod = angular.module('myApp', []);
myMod.controller('controllerA', ['$scope', '$window', 
                                 function($scope, $window) {
  $scope.message = "My Module Has Loaded!";
  $window.alert($scope.message);
}]);