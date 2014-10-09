angular.module('myApp', [])
.controller('myController', ['$scope', function($scope) {
}])
.directive('zoomit', function() {
  return {
    restrict: 'E',
    scope: { src: '@'},
    controller: function($scope) {
        $scope.zInfo = {
            "background-image": "url(" + $scope.src + ")",
            "background-position": "top right"
        };
        $scope.imageClick= function(event){
          event.preventDefault();
          //Using full jQuery to get offset, width and height
          var elem = angular.element(event.target);
          var posX = Math.ceil((event.pageX - elem.offset().left) /
                                elem.width() * 100);
          var posY = Math.ceil((event.pageY - elem.offset().top) /
                                elem.height() * 100);
          $scope.pos = posX + "% " + posY + "%";
          $scope.zInfo["background-position"] = posX + "% " + 
                                                posY + "%";
        };
      },
    link: function(scope, element, attrs) {     
      },
    templateUrl: 'zoomit.html'
  };
});