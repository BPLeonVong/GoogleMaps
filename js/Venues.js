//Map Markers
var VenueItem = function (data, map) {
    var self = this;
    self.lat = data.lat;
    self.long = data.long;
    self.venueName = ko.observable(data.venueName);
    self.venueDescription = ko.observable(data.venueDescription);
    self.country = ko.observable(data.country);
    self.city = ko.observable(data.city);
    self.province = ko.observable(data.province);
    self.address = ko.observable(data.address);
    self.marker = new google.maps.Marker({
        map: map,
        draggable: false,
        position: new google.maps.LatLng(self.lat, self.long)
    });

}

var venueLocations = [
    {
        lat: 43.6529,
        long: -79.3980,
        venueName: "China Town",
        venueDescription: "Party over here",
        country: "CA",
        city: "Toronto",
        province: "ON",
        address: "N/A"
    },
    {
        lat: 43.6550,
        long: -79.4130,
        venueName: "Little Italy",
        venueDescription: "Party over here",
        country: "CA",
        city: "Toronto",
        province: "ON",
        address: "N/A"
    },
    {
        lat: 43.6617,
        long: -79.3950,
        venueName: "University of Toronto",
        venueDescription: "Party over here",
        country: "CA",
        city: "Toronto",
        province: "ON",
        address: "N/A"
    },
    {
        lat: 43.7167,
        long: -79.3383,
        venueName: "Ontario Science Centre",
        venueDescription: "Party over here",
        country: "CA",
        city: "Toronto",
        province: "ON",
        address: "N/A"
    },
    {
        lat: 43.6923,
        long: -79.5784,
        venueName: "Toronto Congress Centre",
        venueDescription: "Party over here",
        country: "CA",
        city: "Toronto",
        province: "ON",
        address: "N/A"
    },
    {
        lat: 43.6426,
        long: -79.3871,
        venueName: "CN Tower",
        venueDescription: "Party over here",
        country: "CA",
        city: "Toronto",
        province: "ON",
        address: "N/A"
    },
    {
        lat: 43.7731,
        long: -79.5036,
        venueName: "York University",
        venueDescription: "Party over here",
        country: "CA",
        city: "Toronto",
        province: "ON",
        address: "N/A"
    }
]