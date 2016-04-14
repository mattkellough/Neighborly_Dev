$(function() {

  var center = new google.maps.LatLng([39.5], -98.35)

  var mapOptions = {
    zoom: 5,
    center,
    panControl: true,
    panControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    scaleControl: false

  };

  var request = {
    location: center,
    radius: 8047,
    types: ['cafe']
  }

  // var service = new google.maps.places.PlacesService(mapOptions);
  //
  // service.nearbySearch(request, callback);

  // function callback(results, status) {
  //   if(status == google.maps.places/PlacesServiceStatus.OK) {
  //     for (var i = 0; i < results.length; i++){
  //       createMarker(results[i]);
  //     }
  //   }
  // }

  // function createMarker(place) {
  //   var placeLoc = place.geometry.location;
  //   var marker = new google.maps.Marker({
  //     map: map,
  //     position: place.geometry.location
  //   });
  // }

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

});
