
var map;

function initMap(newLat, newLng) {
    //console.log('map ' + newLat + "/" + newLng);
    map = new google.maps.Map(document.getElementById('gmap'), {
        center: {
            lat: parseFloat(newLat),
            lng: parseFloat(newLng)
        },
        zoom: 5
    });


    map.addListener('dragend', function () {
        //    
        newCenter = map.getCenter();
        $("#searchLat").val(newCenter.lat());
        $("#searchLng").val(newCenter.lng());
        //    console.log("xxx: " + newCenter.lat());
        findSatAbove();
        //
        //
    });

}


    function getLocation() {
        if (navigator.geolocation) {
         
            navigator.geolocation.getCurrentPosition(showPosition,showError);  
        } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
            //console.log("in getloc");
            //defaultLocal = setLocation();
            //console.log(defaultLocal.setLat);
        }
    } 


        
    function showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation.";
             findSatAbove();
            break;
          case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out.";
            break;
          case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred.";
            break;
        }
      } 
          
    function showPosition(position) {
        currentLat = position.coords.latitude;
        currentLng = position.coords.longitude;
        currentAlt = position.coords.altitude;
        if(currentAlt != null){currentAlt = currentAlt.toFixed(6);}
        console.log(currentLat, currentLng, currentAlt);
        //x.innerHTML =  "Your current coordinates: <br />Lat: " + currentLat.toFixed(6) + "<br/>Lng: " + currentLng.toFixed(6) + "<br/>Alt: " + currentAlt;
        
        sLat.value = position.coords.latitude;
        sLng.value = position.coords.longitude;
        initMap(currentLat ,currentLng ); // init gmap
        //sButton.disabled = false;
        loop = false;
        //findSatAbove();
        
        
        return new setLocation(currentLat,currentLng,currentAlt);
        
    }


