var app = angular.module('myApp', []);
function TimeObj() {
  var cities = { 'Los Angeles': -8, 
                 'New York': -5, 
                 'London': 0, 
                 'Paris': 1, 
                 'Tokyo': 9 };
  this.getTZDate = function(city){
    var localDate = new Date();
    var utcTime = localDate.getTime() + 
                  localDate.getTimezoneOffset() * 
                  60*1000;
    return new Date(utcTime + 
                     (60*60*1000 * 
                      cities[city]));
  };
  this.getCities = function(){
    var cList = [];
    for (var key in cities){
      cList.push(key);
    }
    return cList;
  };
}
app.service('TimeService', [TimeObj]);
app.controller('LAController', ['$scope', 'TimeService', 
                                function($scope, timeS) {
  $scope.myTime = timeS.getTZDate("Los Angeles").toLocaleTimeString();
}]);
app.controller('NYController', ['$scope', 'TimeService', 
                                function($scope, timeS) {
  $scope.myTime = timeS.getTZDate("New York").toLocaleTimeString();
}]);
app.controller('LondonController', ['$scope', 'TimeService', 
                                    function($scope, timeS) {
  $scope.myTime = timeS.getTZDate("London").toLocaleTimeString();
}]);
app.controller('TimeController', ['$scope', 'TimeService', 
                                  function($scope, timeS) {
  $scope.cities = timeS.getCities();
  $scope.getTime = function(cityName){
    return timeS.getTZDate(cityName).toLocaleTimeString();
  };
}]);
