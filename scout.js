/*
    Scout.js v1
    Created by @jarques
*/
(function($){
	$.scout = {        
		get:function(coords){
			if (navigator.geolocation) {
			    navigator.geolocation.getCurrentPosition(
			        function(location) {coords(location.coords)},
			        function(){return false;}
			    );
			} else {
			    return false;
			}
		}
	}
})(jQuery);