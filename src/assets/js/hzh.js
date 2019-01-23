import $ from 'jquery';

$(window).resize(function () {
  if ($(window).width() < 500) {

    $(".tabs li a").on("click", function (e) {
      e.stopPropagation();
      $(".tabs li, .tab").removeClass("current");
      $(this).parent("a").addClass("current");
      let href = $(this).attr("href");
      $(".tab" + href).addClass("current");
      return false;
    });
  }
});


$(document).ready(function () {

  var element = document.getElementById('hzh-bookstoremap');

  var options = {
    disableDefaultUI: true,
    zoom: 17,
    center: { lat: 49.8360521, lng: 24.0102206 },
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  };

  var myMap = new google.maps.Map(element, options);

  var markers = [
    {
      coordinates: { lat: 49.8346615, lng: 24.009091 },
      info: '<h4>Головний корпус Львівської політехніки</h4><h5>вул. Степана Бандери, 12</h5><p>пн-пт 9.00-18.00</p><p>сб 10.00-13.00</p>'
    },
    {
      coordinates: { lat: 49.8364221, lng: 24.008957 },
      info: '<h4>Студентська бібліотека</h4><h5>вул. Митрополита Андрея, 3</h5><p>пн-пт 9.00-18.00</p><p>сб 10.00-15.00</p>'
    },
    {
      coordinates: { lat: 49.8354285, lng: 24.0080412 },
      info: '<h4>1й навчальний корпус Львівської політехніки</h4><h5>вул. Карпінського, 2/4</h5><p>пн-пт 10.00-15.00</p>'
    },
    {
      coordinates: { lat: 49.8360521, lng: 24.0102206 },
      info: '<h4>2й навчальний корпус Львівської політехніки</h4><h5>вул. Карпінського, 6</h5><p>пн-пт 10.00-15.00</p>'
    },
    {
      coordinates: { lat: 49.8368829, lng: 24.0102981 },
      info: '<h4>4й навчальний корпус Львівської політехніки</h4><h5>вул. Митрополита Андрея, 5</h5><p>пн-пт 9.00-18.00</p>'
    },
    {
      coordinates: { lat: 49.8351586, lng: 24.0061816 },
      info: '<h4>5й навчальний корпус Львівської політехніки</h4><h5>вул. С. Бандери, 28а</h5><p>пн-пт 10.00-15.00</p>'
    },
    {
      coordinates: { lat: 49.8374325, lng: 24.012829 },
      info: '<h4>8й навчальний корпус Львівської політехніки</h4><h5>пл. Св. Юра, 2</h5><p>пн-пт 10.00-15.00</p>'
    },
    {
      coordinates: { lat: 49.8358564, lng: 24.0138142 },
      info: '<h4>11й навчальний корпус Львівської політехніки</h4><h5>вул. Професорська, 2</h5><p>пн-пт 10.00-15.00</p>'
    }
  ];

  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  function addMarker(properties) {
    var marker = new google.maps.Marker({
      position: properties.coordinates,
      map: myMap,
      icon: '../../../assets/img/marker.svg',
    });
    
    if (properties.info) {
      var InfoWindow = new google.maps.InfoWindow({
        content: properties.info
      });

      marker.addListener('click', function () {
        InfoWindow.open(myMap, marker);
      })
    }
  }

})




//contacts map
$(document).ready(function () {

  var element = document.getElementById('hzh-contactmap');

  var options = {
    disableDefaultUI: true,
    zoom: 17,
    center: {lat: 49.835293, lng: 24.0198913},
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  };

  var hzhContactMap = new google.maps.Map(element, options);

  var marker = new google.maps.Marker({
    position: {lat: 49.835293, lng: 24.0198913}, 
    map: hzhContactMap,
    icon: '../../../assets/img/marker.svg',
  });

  // var InfoWindow = new google.maps.InfoWindow({
  //   content: '<h4>11й навчальний корпус Львівської політехніки</h4><h5>вул. Професорська, 2</h5><p>пн-пт 10.00-15.00</p>'
  // })

  // marker.addListener('click', function(){
  //   InfoWindow.open(hzhContactMap, marker);
  // })

})
