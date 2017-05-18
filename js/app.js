var map;
var marker;
function initMap () {
    console.log("I am working");
    map = new google.maps.Map(document.getElementById("my-map"), {
        center: {lat: 28.845614, lng: 78.767456},
        zoom: 15
    });
    
    marker = new google.maps.Marker({
        position: {lat: 28.845614, lng: 78.767456},
        map: map,
        title: 'First Marker'
    });
};