// My Javascript File

//Search Bar

//Nav Bar
var ViewModel = function () {
    var self = this;

    function init() {
        //Set maps and set 
        map = MyGoogleMaps(mapElement, mapSpecs);
    }

    var map,
        mapElement = $('#map')[0],
        mapSpecs = new google.maps.LatLng(43.7, -79.4);

    var infoWindow = new google.maps.InfoWindow();

    this.venues = ko.observableArray([]);
    this.numVenues = ko.observable(0);

    //this.currentVenue;

    this.setMarker = function (clickedMark) {
        // fetch and set html to info window content
        //infoWindow.setContent(clickedMark.formattedMeetupList());

        // open up the appropriate info window at the selected corner's marker
        infoWindow.open(map, clickedMark.marker);

        // scroll the map to the marker's position
        map.panTo(clickedMark.marker.position);

        // animate markers
        clickedMark.marker.setAnimation(google.maps.Animation.BOUNCE);
        self.venues().forEach(function (old_corner) {
            if (clickedMark != old_corner) {
                old_corner.marker.setAnimation(null);
            }
        });


        console.log("Hello World");
    }

    // search query, bound to `#search-input` search box
    this.query = ko.observable('');
    init();

    venueLocations.forEach(function (Hotspot) {
        var newVenue = new VenueItem(Hotspot, map);
        self.venues.push(newVenue);
    });

    self.venues().forEach(function (Hotspot) {
        Hotspot.marker.setMap(map);
    });
}

ko.applyBindings(new ViewModel());
//3rd Party API

