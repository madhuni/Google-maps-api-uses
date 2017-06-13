var map;
var marker;
function initMap () {
    map = new google.maps.Map(document.getElementById("my-map"), {
        center: {lat: 40.7413549, lng: -73.9980244},
        zoom: 13,
        mapTypeId: 'roadmap'
    });
    
    var markerPosition = {lat: 40.719526, lng: -74.0089934};
    
    /* Creating the marker by passing the options in the constructor itself */
    marker = new google.maps.Marker({
        position: markerPosition,
        map: map,
        title: "Hello World !!!",
        draggable: false,
        animation: google.maps.Animation.DROP
    });
    
    /* Passing the empty Object in the Marker constructor */
    // marker = new google.maps.Marker({});
    
    /* Setting the Options value separately by using 'set' methods of Marker Object */
    // marker.setPosition(markerPosition);
    // marker.setMap(map);
    // marker.setTitle("Hello World !!!");
    
    var contentString = '<div class="text-center info-window-container"><h1 class=text-center>Google</h1><hr><img alt="Google Logo"class=img-responsive src=https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png><p>This article is about the company. For the search engine, see <em>Google Search</em>.</div>';
    
    var infoWindow =  new google.maps.InfoWindow({
        content: contentString
    });
    
    // marker.addListener('dblclick', toggleBounce);
    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });
};

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
};