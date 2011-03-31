/*
    Scout.js v1
    Created by @jarques and @meltingice
*/
(function(){

  var geoCapable = (function () {
    return !!navigator.geolocation;
  }());
  
  var scout = (function (method) {
    var self = this;
    
    return {
      get: function(){
        if (!geoCapable) { return; }
        
        var opts = {};
        var callback = function () {};
        
        if (arguments.length == 1) {
          callback = arguments[0];
        } else if (arguments.length == 2) {
          opts = arguments[0];
          callback = arguments[1];
        }
        
        return navigator.geolocation.getCurrentPosition(
          // Success  
          function (location) {
            callback.call(self, location.coords);
          },
          
          // Error
          function () {},
          
          // Options
          opts
        );
      },
      
      watch: function () {
        if (!geoCapable) { return; }
        
        var opts = {};
        var callback = function () {};
        
        if (arguments.length == 1) {
          callback = arguments[0];
        } else if (arguments.length == 2) {
          opts = arguments[0];
          callback = arguments[1];
        }
        
        return navigator.geolocation.watchPosition(
          function (position) {
            callback.call(self, position.coords);
          },
          
          // Error
          function () {},
          
          // Options
          opts
        );
      }
    };
  }());
  
  window.scout = scout;
})();