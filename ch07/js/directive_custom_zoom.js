angular.module('myApp', [])
.directive('zoomit', function() {
  return {
    link: function (scope, elem, attr){
      var dragging = false;
      var lastX = 0;
      elem.on('mousedown', function(event){
        lastX = event.pageX;
        event.preventDefault();
        dragging = true;
      });
      elem.on('mouseup', function(){
        dragging = false;
      });
      elem.on('mouseleave', function(){
        dragging = false;
      });
      elem.on('mousemove', function(event){
        if(dragging){
          var adjustment = null;
          if (event.pageX > lastX &&
              elem.width() < 300){
            adjustment = 1.1;
          } else if ( elem.width() > 100){
            adjustment = .9;
          }          
          //requires full jQuery library
          if(adjustment){
            elem.width(elem.width()*adjustment);
            elem.height(elem.height()*adjustment);
          }
          lastX = event.pageX;
        }
      });
    }
  };
})
.directive('fadeit', function() {
  return {
    link: function (scope, elem, attr){
      var dragging = false;
      var lastY = 0;
      elem.on('mousedown', function(event){
        lastY = event.pageY;
        event.preventDefault();
        dragging = true;
      });
      elem.on('mouseup', function(){
        dragging = false;
      });
      elem.on('mouseleave', function(){
        dragging = false;
      });
      elem.on('mousemove', function(event){
        if(dragging){
          var adjustment = null;
          var currentOpacity = parseFloat(elem.css("opacity"));
          if (event.pageY > lastY &&
              currentOpacity < 1){
            adjustment = 1.1;
          } else if ( currentOpacity > 0.5){
            adjustment = .9;
          }          
          //requires full jQuery library
          if(adjustment){
            elem.css("opacity", currentOpacity*adjustment);
          }
          lastY = event.pageY;
        }
      });
    }
  };
});