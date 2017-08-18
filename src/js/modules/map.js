module.exports = function() {

  // begin google map in index.html
  var markers = [
    // moscow
    [55.79093, 37.60345, "Москва"],

    // spb
    [59.87188, 30.30129, "Санкт-Петербург"],

    //Набережные Челны
    [55.730569, 52.392449, "Набережные Челны"],

    //Екатеринбург
    [56.863565, 60.630524, "Екатеринбург"],

    //Тюмень
    [57.158136, 65.535438, 'Тюмень'],

    //Ростов на дону
    [47.239227, 39.692515, "Ростов на дону"],

    //Киров
    [58.605859, 49.655816, "Киров"],

    //Ижевск
    [56.852340, 53.226039, "Ижевск"],

    //Новосибирск
    [55.030942, 82.927428, "Новосибирск"],
  ];

  var map = {};


  var isDraggable = $(document).width() > 700 ? true : false;

  function initialize() {
    var mapDiv = document.getElementById("map");

    map = new google.maps.Map(mapDiv, {
      zoom: 4,
      disableDefaultUI: false,
      scrollwheel: false,
      draggable: isDraggable,
      center: {lat: 55.486244, lng: 57.657120},
      styles: [{featureType: "water",elementType: "geometry",stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]},{featureType: "landscape",elementType: "geometry",stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]},{featureType: "road.highway",elementType: "geometry.fill",stylers: [{ color: "#ffffff" }, { lightness: 17 }]},{featureType: "road.highway",elementType: "geometry.stroke",stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }]},{featureType: "road.arterial",elementType: "geometry",stylers: [{ color: "#ffffff" }, { lightness: 18 }]},{featureType: "road.local",elementType: "geometry",stylers: [{ color: "#ffffff" }, { lightness: 16 }]},{featureType: "poi",elementType: "geometry",stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]},{featureType: "poi.park",elementType: "geometry",stylers: [{ color: "#dedede" }, { lightness: 21 }]},{elementType: "labels.text.stroke",stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }]},{elementType: "labels.text.fill",stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }]},{ elementType: "labels.icon", stylers: [{ visibility: "off" }] },{featureType: "transit",elementType: "geometry",stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]},{featureType: "administrative",elementType: "geometry.fill",stylers: [{ color: "#fefefe" }, { lightness: 20 }]},{featureType: "administrative",elementType: "geometry.stroke",stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }]}]
    });

    var image = "http://prc.odinokun.com/assets/img/map-marker.png";
    var bubbleWrapStart = '<div class="map_bubble">';
    var bubbleWrapEnd = "</div>";

    $.each(markers, function(index, val) {
      var myLatLng = new google.maps.LatLng(val[0], val[1]);
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        title: val[2]
      });

      var infowindow = new google.maps.InfoWindow({
        content: bubbleWrapStart + val[2] + bubbleWrapEnd
      });

      marker.addListener("click", function() {
        infowindow.open(map, marker);
        map.panTo(this.getPosition());
        map.setZoom(12);
      });
    });
  }
  google.maps.event.addDomListener(window, "load", initialize);
  // end   google map in index.html

};