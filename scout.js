/*
    Scout.js v1
    Created by @jarques and @meltingice
*/
(function(){
  
  var scout = (function (method) {
    return {
      get: function(coords){
        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(
                function(location) {coords(location.coords)},
                function(){return false;}
            );
        } else {
            return false;
        }
      }
    };
  }());
  
  window.scout = scout;
})();