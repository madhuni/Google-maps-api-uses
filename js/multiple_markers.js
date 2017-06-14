var map;

/* This array will contain all the markers related to the locations */
var markers = [];

/* Initializing the initMap function */
function initMap () {
    mapOptions = {
        center: {lat: 40.7413549, lng: -73.9980244},
        zoom: 13,
        mapTypeId: 'roadmap'
    };
    map = new google.maps.Map(document.getElementById('my-map'), mapOptions);
    
    /* Defining the array of the location objects */
    var locations = [
        {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
        {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
        {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
        {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
        {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
        {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
    ];

    var bounds = new google.maps.LatLngBounds();
    var largeInfoWindow = new google.maps.InfoWindow();
    
    for (var i = 0; i < locations.length; i++) {
        var title = locations[i].title;
        var position = locations[i].location;
        var marker = new google.maps.Marker({
            map: map,
            title: title,
            position: position,
            id: i,
            draggable: false,
            animation: google.maps.Animation.DROP
        });
        
        /* Pushing the each marker Object into the array */
        markers.push(marker);
        
        /* Adding the 'click' event to each marker */
        marker.addListener('click', function () {
            console.log(this);
            displayInfoWindow(this, largeInfoWindow);
        });
        
        /* 
        * This will make the such that it will bind all the markers and display 
        * them properly on the map 
        */
        bounds.extend(markers[i].position);
    }
    
    map.fitBounds(bounds);
};

/* This function will be called by each marker to show the infowindow on the marker */
function displayInfoWindow (marker, infoWindow) {
    if (infoWindow.marker !== marker) {
        infoWindow.marker = marker;
        infoWindow.setContent("This is "+ marker.title);
        infoWindow.open(map, marker);
    }
};
