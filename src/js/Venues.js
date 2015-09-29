var venueImageIcons = ["", {}, {}];

//Map Markers
var VenueItem = function (data, map) {
    var self = this;
    self.lat = data.lat;
    self.long = data.long;
    self.location = ko.computed(function () {
        if (self.lat === 0 || self.lon === 0) {
            return null;
        } else {
            return new google.maps.LatLng(self.lat, self.lon);
        }
    });
    self.venueName = ko.observable(data.venueName);
    self.venueDescription = data.venueDescription;
    self.country = ko.observable(data.country);
    self.city = ko.observable(data.city);
    self.province = ko.observable(data.province);
    self.address = ko.observable(data.address);
    self.marker = new google.maps.Marker({
        map: map,
        draggable: false,
        position: new google.maps.LatLng(self.lat, self.long),
        icon:"images/"+data.type+".png"
    });
};

var venueLocations = [
    {
        lat: 43.6529,
        long: -79.3980,
        venueName: "China Town",
        venueDescription: "An area in Toronto which happens to have a large amount of asian shops.",
        country: "CA",
        city: "Toronto",
        province: "ON",
        address: "N/A",
        type:"Recreation"
    },
    {
        lat: 43.6550,
        long: -79.4130,
        venueName: "Little Italy",
        venueDescription: "An area in Toronto which has a very large amount of Italian restaurants and businesses.",
        country: "CA",
        city: "Toronto",
        province: "ON",
        address: "N/A",
        type:"Recreation"
    },
    {
        lat: 43.6617,
        long: -79.3950,
        venueName: "University of Toronto",
        venueDescription: "One of the most academically influential learning instituions in the world.",
        country: "CA",
        city: "Toronto",
        province: "ON",
        address: "N/A",
        type:"Education"
    },
    {
        lat: 43.7167,
        long: -79.3383,
        venueName: "Ontario Science Centre",
        venueDescription: "A science museum featuring many different types of technicalogical reserach in the world.",
        country: "CA",
        city: "Toronto",
        province: "ON",
        address: "N/A",
        type: "Recreation"
    },
    {
        lat: 43.6923,
        long: -79.5784,
        venueName: "Toronto Congress Centre",
        venueDescription: "A venue which is used as an convention centre which is sitatuted near the airport and many different hotels.",
        country: "CA",
        city: "Toronto",
        province: "ON",
        address: "N/A",
        type: "Recreation"
    },
    {
        lat: 43.6426,
        long: -79.3871,
        venueName: "CN Tower",
        venueDescription: "A modern spectacle of the world's engineering and a really tall free-standing structure.",
        country: "CA",
        city: "Toronto",
        province: "ON",
        address: "N/A",
        type: "Recreation"
    },
    {
        lat: 43.7731,
        long: -79.5036,
        venueName: "York University",
        venueDescription: "An instituion of Canada which has a large variety of different academic programs, and it is also the only institute in Ontario to have a space engineering program.",
        country: "CA",
        city: "Toronto",
        province: "ON",
        address: "N/A",
        type: "Education"
    }
];