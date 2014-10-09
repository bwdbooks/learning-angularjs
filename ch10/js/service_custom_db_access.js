var app = angular.module('dbAccess', []);
function DBAccessObj($http, $q) {
  this.getUserData = function(){
    var deferred = $q.defer();
    $http.get('/get/user')
    .success(function(response, status, headers, config) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
  this.updateUser = function(userInfo){
    var deferred = $q.defer();
    $http.post('/set/user', { userData: userInfo}).
    success(function(response, status, headers, config) {
      deferred.resolve(response);
    });
    return deferred.promise;    
  };
  this.getData = function(){
    var deferred = $q.defer();
    $http.get('/get/data')
    .success(function(response, status, headers, config) {
      deferred.resolve(response);
    });
    return deferred.promise;
  };
  this.updateData = function(data){
    var deferred = $q.defer();
    $http.post('/set/data', { data: data}).
    success(function(response, status, headers, config) {
      deferred.resolve(response);
    });
    return deferred.promise;    
  };
}
app.service('DBService', ['$http', '$q', DBAccessObj]);
