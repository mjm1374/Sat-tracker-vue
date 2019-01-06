
var map;

function initMap(newLat, newLng) {
    //console.log('map ' + newLat + "/" + newLng);
    map = new google.maps.Map(document.getElementById('map'), {
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