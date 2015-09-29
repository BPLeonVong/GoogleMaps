var MyGoogleMaps = function (divElement, location) {
    var self = this;

    var roadAtlasStyles = [
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          { "saturation": -100 },
          { "lightness": -8 },
          { "gamma": 1.18 }
        ]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          { "saturation": -100 },
          { "gamma": 1 },
          { "lightness": -24 }
        ]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          { "saturation": -100 }
        ]
    }, {
        "featureType": "administrative",
        "stylers": [
          { "saturation": -100 }
        ]
    }, {
        "featureType": "transit",
        "stylers": [
          { "saturation": -100 }
        ]
    }, {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          { "saturation": -100 }
        ]
    }, {
        "featureType": "road",
        "stylers": [
          { "color": '#D0B2B2' },
        ]
    }, {
        "featureType": "administrative",
        "stylers": [
          { "saturation": -100 }
        ]
    }, {
        "featureType": "landscape",
        "stylers": [
          { "saturation": -100 }
        ]
    }, {
        "featureType": "poi",
        "stylers": [
          { "saturation": -100 }
        ]
    }
    ];

    var mapOptions = {
        zoom: 11,
        center: location,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
        },
        mapTypeControl: false,
        panControl: false,
        streetViewControl: false,
        zoomControl: false
    };
    map = new google.maps.Map(divElement, mapOptions);
    var styledMapOptions = {};
    var usRoadMapType = new google.maps.StyledMapType(roadAtlasStyles, styledMapOptions);
    map.mapTypes.set('usroadatlas', usRoadMapType);
    map.setMapTypeId('usroadatlas');
    return map;
};