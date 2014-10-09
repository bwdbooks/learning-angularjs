angular.module('myApp', []).
  controller('myController', ['$scope', '$http', 
                              function($scope, $http) {
    $scope.storeItems = {};
    $scope.kitchenItems = {};
    $scope.status = "";
    $scope.resetStore = function(){
      $scope.status = "";
      $http.get('/reset/data')
           .success(function(data, status, headers, config) {
              $scope.storeItems = data;
            })
           .error(function(data, status, headers, config) {
              $scope.status = data;
            });
    };
    $scope.buyItem = function(buyItem){
      $http.post('/buy/item', {item:buyItem})
           .success(function(data, status, headers, config) {
              $scope.storeItems = data;
              if($scope.kitchenItems.hasOwnProperty(buyItem)){
                $scope.kitchenItems[buyItem] += 1;
              } else {
                $scope.kitchenItems[buyItem] = 1;
              }
              $scope.status = "Purchased " + buyItem;
            })
           .error(function(data, status, headers, config) {
              $scope.status = data.msg;
            });
    };
    $scope.useItem = function(useItem){
      if($scope.kitchenItems[useItem] > 0){
        $scope.kitchenItems[useItem] -= 1;
      }
    };
  }]);