$(function() {

  var mapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(39.5, -98.35),
    panControl: false,
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

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

});
