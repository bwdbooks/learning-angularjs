var app = angular.module('myApp', []);
app.value('censorWords', ["can't", "quit", "fail"]);
app.constant('repString', "****");
app.factory('censorF', ['censorWords', 'repString', 
                        function (cWords, repString) {
  return function(inString) { 
    var outString = inString;
    for(i in cWords){
      outString = outString.replace(cWords[i], repString);
    }
    return outString;
  };
}]);
function CensorObj(cWords, repString) {
  this.censor = function(inString){
    var outString = inString;
    for(i in cWords){
      outString = outString.replace(cWords[i], repString);
    }
    return outString;
  };
  this.censoredWords = function(){
    return cWords;
  };
}
app.service('censorS', ['censorWords', 'repString', CensorObj]);
app.controller('myController', ['$scope', 'censorF', 'censorS', 
                                function($scope, censorF, censorS) {
  $scope.censoredWords = censorS.censoredWords();
  $scope.inPhrase = "";
  $scope.censoredByFactory = censorF("");
  $scope.censoredByService = censorS.censor("");;  
  $scope.$watch('inPhrase', function(newValue, oldValue){
    $scope.censoredByFactory = censorF(newValue);
    $scope.censoredByService = censorS.censor(newValue);    
  });
}]);
