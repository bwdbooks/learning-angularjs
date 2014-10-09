angular.module('myApp', [])
.controller('myController', ['$scope', function($scope) {
  $scope.stars = [1,2,3,4,5];
  $scope.items = [
      { 
        description: "Delicate Arch", 
        img: "/images/arch.jpg",
        rating: 3},
      { 
        description: "Silver Lake", 
        img: "/images/lake.jpg",
        rating: 4},
      { 
        description: "Yellowstone Bison", 
        img: "/images/bison.jpg",
        rating: 4}
    ];  
  $scope.adjustRating = function(item, value){
    item.rating = value;
  };  
}]);