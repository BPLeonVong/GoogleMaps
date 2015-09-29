// My Javascript File

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
    var listOfMarkers = [];

    self.setMarker = function (clickedMark) {

        // scroll the map to the marker's position

        map.panTo(clickedMark.marker.position);
        infoWindow.setPosition(clickedMark.marker.position);

        // fetch and set html to info window content
        infoWindow.setContent(clickedMark.venueDescription);

        // open up the appropriate info window at the selected corner's marker
        infoWindow.open(map, clickedMark.marker);

        // animate markers
        clickedMark.marker.setAnimation(google.maps.Animation.BOUNCE);
        self.venues().forEach(function (old_corner) {
            if (clickedMark != old_corner) {
                old_corner.marker.setAnimation(null);
            }
        });


    };

    // search query, bound to `#search-input` search box
    self.query = ko.observable('');
    self.search = function () {

    };

    google.maps.Map.prototype.clearMarkers = function () {
        for (var i = 0; i < listOfMarkers.length; i++) {
            listOfMarkers[i].setMap(null);
        }
        listOfMarkers = [];
    };

    self.filteredVenueList = ko.computed(function () {
        // loop through corners and clear map markers

        if (map)
        {
            map.clearMarkers();
        }
        console.log(listOfMarkers.length);
        // filter results where name contains `self.query`
        var results = ko.utils.arrayFilter(self.venues(), function (Hotspot) {
            var compared = Hotspot.venueName().toLowerCase().indexOf(self.query().toLowerCase());
            if (compared < 0) {
                return false;
            }
            else
            {
                return true;
            }
            return;
        });

        // go through results and set marker to visible
        results.forEach(function (Hotspot) {
            Hotspot.marker.setMap(map);
            google.maps.event.addListener(Hotspot.marker, 'click', function () {
                self.setMarker(Hotspot);
            });
            listOfMarkers.push(Hotspot.marker);
            if (mc) {
                mc.clearMarkers();
                mc = new MarkerClusterer(map, listOfMarkers, mcOptions);
            }
        });

        // update the number of corners (couldn't get `ko.computed` to work)
        self.numVenues(results.length);
        if (map)
        {
            map.setZoom(11);
            map.setPosition = mapSpecs;
        }
        return results;
    });

    init();

    venueLocations.forEach(function (Hotspot) {
        var newVenue = new VenueItem(Hotspot, map);
        self.venues.push(newVenue);
    });

    self.venues().forEach(function (Hotspot) {
        Hotspot.marker.setMap(map);
        google.maps.event.addListener(Hotspot.marker, 'click', function () {
            self.setMarker(Hotspot);
        });
        listOfMarkers.push(Hotspot.marker);
    });
    
    var mcOptions = {gridSize: 50, maxZoom: 15};
    var mc = new MarkerClusterer(map, listOfMarkers, mcOptions);
};

ko.applyBindings(new ViewModel());