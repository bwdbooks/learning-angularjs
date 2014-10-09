angular.module('myApp', [])
.controller('myController', ['$scope', function($scope) {
  $scope.items = [1,2,3,4,5];
}])
.directive('expandList', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {title: '@', listWidth: '@exwidth'},
    controller: function($scope) {
      $scope.collapsed = false;
      $scope.expandHandle = "-";
      items = $scope.items = [];
      $scope.collapse = function() {
        if ($scope.collapsed){
          $scope.collapsed = false;
          $scope.expandHandle = "-";
        } else {
          $scope.collapsed = true;
          $scope.expandHandle = "+";
        }
        angular.forEach($scope.items, function(item) {
          item.myHide = $scope.collapsed;          
        });
      };
      this.addItem = function(item) {
        item.myStyle.width = $scope.listWidth;
        items.push(item);
        item.myHide=false;
      };
    },
    link: function(scope, element, attrs, expandCtrl) {
      element.css("display", "inline-block");
      element.css("width", scope.listWidth);
    },
    templateUrl: 'expand_list.html',
  };
})
.directive('expandItem', function() {
  return { 
    require: '^expandList', 
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: function($scope){
        $scope.myHide = false;
        $scope.myStyle = { width: "100px", "display": "inline-block" };
      },
    link: function(scope, element, attrs, expandCtrl) {
      expandCtrl.addItem(scope);
    },
    templateUrl: 'expand_item.html',    
  };
});