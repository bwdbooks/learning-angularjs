angular.module('myApp', [])
  .controller('myController', ['$scope', 'filterFilter', 
                              function($scope, filterFilter) {
    $scope.planes = [
      {make: 'Boeing', model: '777', capacity: 440},
      {make: 'Boeing', model: '747', capacity: 700},
      {make: 'Airbus', model: 'A380', capacity: 850},
      {make: 'Airbus', model: 'A340', capacity: 420},
      {make: 'McDonnell Douglas', model: 'DC10', capacity: 380},
      {make: 'McDonnell Douglas', model: 'MD11', capacity: 410},
      {make: 'Lockheed', model: 'L1011', capacity: 380}];
    $scope.filteredPlanes = $scope.planes;
    $scope.reverse = true;
    $scope.column = 'make';
    $scope.setSort = function(column){
      $scope.column = column;
      $scope.reverse = !$scope.reverse;
    };
    $scope.filterString = '';
    $scope.setFilter = function(value){
      $scope.filteredPlanes = 
        filterFilter($scope.planes, $scope.filterString);
    };
  }]);