angular.module('myApp', [])
.controller('myController', function($scope) {
    $scope.title="myApplication";
  })
.directive('mybox', function() {
  return {
    transclude: true,
    restrict: 'E',
    scope: {title: '@', bwidth: '@bwidth'},
    template: '<div><span class="titleBar">{{title}}' + 
              '</span><div ng-transclude></div></div>',
    link: function (scope, elem, attr, controller, transclude){
        elem.append('<span class="footer">' + scope.$parent.title + '</span>');
        elem.css('border', '2px ridge black');
        elem.css('display', 'inline-block');
        elem.css('width', scope.bwidth);
      },
    };
  });