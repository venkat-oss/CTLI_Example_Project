 var startPos;
 var map;
  
 function init()
  {
  
     navigator.geolocation.getCurrentPosition(updateLocation);
	
  }
  

 function updateLocation(position)
 {
   startPos = position;
   var latitude = position.coords.latitude;
   var longitude = position.coords.longitude;
   var coords = new google.maps.LatLng(42.269064, -89.018154);

   var mapOptions = { zoom:10,
                      center:coords,
                      mapTypeControl:false,
                      navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL},
                      mapTypeId:google.maps.MapTypeId.ROADMAP
					  };

  map = new google.maps.Map(document.getElementById("map"),mapOptions);

  var marker = new google.maps.Marker({ position:coords,
                                        map:map,
                                        title:"Your current location!"
                                       });
 }

 
 $(function() {
			init();
		});

 
