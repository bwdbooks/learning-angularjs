var app = angular.module('myApp', ['dbAccess']);
app.controller('myController', ['$scope', 'DBService', 
                                function($scope, db) {
  $scope.status = "";
  $scope.getUser = function(){    
    db.getUserData().then(function(response){
      $scope.userInfo = response;
      $scope.status = "User Data Retrieve.";
    });
  };
  $scope.getData = function(){    
    db.getData().then(function(response){
      $scope.data = response;
      $scope.status = "User Data Retrieve.";
    });
  };
  $scope.updateUser = function(){
    db.updateUser($scope.userInfo).then(function(response){
      $scope.status = response.status;
    });
  };
  $scope.updateData = function(){
    db.updateData($scope.data).then(function(response){
      $scope.status = response.status;
    });
  };
  $scope.getUser();
  $scope.getData();
}]);
