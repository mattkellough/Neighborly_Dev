$(document).ready(function(){


  var coordinates = points


  var mapOptions = {
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: new google.maps.LatLng(39.5, -98.35),
    panControl: true,
    panControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    scaleControl: true

  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var acOptions = {
    types: ['establishment']
  };

  var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), acOptions);
  autocomplete.bindTo('bounds', map);
  var infoWindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map
  });

  google.maps.event.addListener(autocomplete, 'place_changed', function(){
    infoWindow.close();
    var place = autocomplete.getPlace();
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    marker.setPosition(place.geometry.location);
    infoWindow.setContent('<div><strong>' + place.name + '</strong><br>'
    + '<div><strong>' + place.formatted_address + '</strong><br>'
    + '<div><strong>' + place.website + '</strong><br>'
    + '<div><strong>' + place.formatted_phone_number + '</strong><br>');
    infoWindow.open(map, marker);
    google.maps.event.addListener(marker,'click', function(e){

      infoWindow.open(map, marker);

    });
  });

  for (var i=0,  total=coordinates.length; i < total; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(coordinates[i][0], coordinates[i][1]),
      map: map
    });
    var infoWindowOptions = {
      content: 'Job Posting'
    };

    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    google.maps.event.addListener(marker,'click',function(e){

      infoWindow.open(map, marker);

    });
    console.log(coordinates[i][0], coordinates[i][1]);
  };


});
