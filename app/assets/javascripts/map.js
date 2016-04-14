$(function() {

  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(25.7823072, -80.3011211),
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
