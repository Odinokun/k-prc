module.exports = function() {
  google.maps.event.addDomListener(window, "load", initialize);
  // $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
  //   var country = data.country, // страна пользователя
  //       city = data.city, // страна пользователя
  //       lat = data.lat,
  //       lon = data.lon; //ip пользователя
  //       console.log(country + ", " + city + ", " + lat + ", " + lon);         
  // });


  // begin google map in index.html
  var coords = [
    // !!!!!!!!!!!!  порядок координат не менять, а добавлять снизу
    // all
    [55.486244, 57.657120],
    // spb
    [59.909246, 30.347095, "Санкт-Петербург"],
    // moscow
    [55.79093, 37.60345, "Москва"],
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

  var markers = [
    // moscow
    [55.79093, 37.60345, "Москва", "msk"],

    // spb
    [59.909246, 30.347095, "Санкт-Петербург", "spb"],

    //Набережные Челны
    [55.730569, 52.392449, "Набережные Челны", "cheln"],

    //Екатеринбург
    [56.863565, 60.630524, "Екатеринбург", "ekb"],

    //Тюмень
    [57.158136, 65.535438, "Тюмень", 'tumen'],

    //Ростов на дону
    [47.239227, 39.692515, "Ростов на Дону", "rnd"],

    //Киров
    [58.605859, 49.655816, "Киров", "kirov"],

    //Ижевск
    [56.852340, 53.226039, "Ижевск", "iz"],

    //Новосибирск
    [55.030942, 82.927428, "Новосибирск", "novosib"],
  ];

  var map = {};


  var isDraggable = $(document).width() > 700 ? true : false;

  function initialize() {
    var mapDiv = document.getElementById("map");

    map = new google.maps.Map(mapDiv, {
      zoom: 5,
      disableDefaultUI: false,
      scrollwheel: false,
      draggable: isDraggable,
      center: {lat: 60.486244, lng: 55.657120},
      styles: [{featureType: "water",elementType: "geometry",stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]},{featureType: "landscape",elementType: "geometry",stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]},{featureType: "road.highway",elementType: "geometry.fill",stylers: [{ color: "#ffffff" }, { lightness: 17 }]},{featureType: "road.highway",elementType: "geometry.stroke",stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }]},{featureType: "road.arterial",elementType: "geometry",stylers: [{ color: "#ffffff" }, { lightness: 18 }]},{featureType: "road.local",elementType: "geometry",stylers: [{ color: "#ffffff" }, { lightness: 16 }]},{featureType: "poi",elementType: "geometry",stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]},{featureType: "poi.park",elementType: "geometry",stylers: [{ color: "#dedede" }, { lightness: 21 }]},{elementType: "labels.text.stroke",stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }]},{elementType: "labels.text.fill",stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }]},{ elementType: "labels.icon", stylers: [{ visibility: "off" }] },{featureType: "transit",elementType: "geometry",stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]},{featureType: "administrative",elementType: "geometry.fill",stylers: [{ color: "#fefefe" }, { lightness: 20 }]},{featureType: "administrative",elementType: "geometry.stroke",stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }]}]
    });

    var image = "http://prc.odinokun.com/assets/img/map-marker.png";
    var bubbleWrapStart = '<div class="map_bubble">';
    var bubbleWrapEnd = "</div>";

    // // begin geolocation
    // // Try HTML5 geolocation.
    // var infoWindow = new google.maps.InfoWindow({map: map});

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     var pos = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };

    //     infoWindow.setPosition(pos);
    //     infoWindow.setContent('<button class="btn btn-rr">hellow</button>');
    //     map.setCenter(pos);
    //   }, function() {
    //     handleLocationError(true, infoWindow, map.getCenter());
    //   });
    // } else {
    //   // Browser doesn't support Geolocation
    //   handleLocationError(false, infoWindow, map.getCenter());
    // }
    // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    //   infoWindow.setPosition(pos);
    //   infoWindow.setContent(browserHasGeolocation ?
    //                         'Error: The Geolocation service failed.' :
    //                         'Error: Your browser doesn\'t support geolocation.');
    // }
    // // end geolocation



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
      $(function() {
        infowindow.open(map, marker);
      });

      marker.addListener("mouseover", function() {
        infowindow.open(map, marker);
        var markerClick = val[3];
        $('.map-banner').fadeOut(0);
        $('.map-banner-' + markerClick).fadeIn();
      });

      marker.addListener("click", function() {
        map.panTo(this.getPosition());
        map.setZoom(12);
        var markerClick = val[3];
        $('.map-banner').fadeOut(0);
        $('.map-banner-' + markerClick).delay(500).fadeIn();
        $(".control select [value=" + markerClick + "]").attr("selected", "selected");
      });
    });
  }
  // google.maps.event.addDomListener(window, "load", initialize);

  $('.map-banner__close').on('click', function(){
        $('.map-banner').fadeOut();
  })



  $(document).ready(function($) {

      // begin Изменения при выборе селекта
      $('.control').on('change', 'select', function(event) {
          event.preventDefault();
          var city = $(this).val();
          $('.map-banner').fadeOut(0);
          $('.map-banner-' + city).delay(500).fadeIn();
          goToCity(city);
      });
      // end Изменения при выборе селекта

      // begin Выбор города в попапе в шапке
      $('.geolocation-region__popup-city li').on('click', function() {
        $('.geolocation-region__popup-city').fadeOut();
        $('.popup__layer').fadeOut();
        $('body').removeClass('no-scroll');

        var city = $(this).data('city');

        // меняем значение селекта на карте
        $(".control select [value=" + city + "]").attr("selected", "selected");
        // меняем баннер на карте
        $('.map-banner').fadeOut(0);
        $('.map-banner-' + city).delay(500).fadeIn();
        // меняем город
        $('.geolocation-region__city').fadeOut(0);
        $('.geolocation-region__city-' + city).fadeIn();
        // меняем телефон
        $('.geolocation-phone__link').fadeOut(0);
        $('.geolocation-phone__link-' + city).fadeIn();

        goToCity(city);

      })
      // end Выбор города в попапе в шапке

      // меняем координаты центра карты по выбранному селекту
      function goToCity(city) {
        switch (city) {
            case 'all':
                map.setZoom(4);
                map.setCenter(new google.maps.LatLng(coords[0][0], coords[0][1]));
                break;
            case 'spb':
                map.setZoom(10);
                map.setCenter(new google.maps.LatLng(coords[1][0], coords[1][1]));
                break;
            case 'msk':
                map.setZoom(10);
                map.setCenter(new google.maps.LatLng(coords[2][0], coords[2][1]));
                break;
            case 'cheln':
                map.setZoom(10);
                map.setCenter(new google.maps.LatLng(coords[3][0], coords[3][1]));
                break;
            case 'ekb':
                map.setZoom(10);
                map.setCenter(new google.maps.LatLng(coords[4][0], coords[4][1]));
                break;
            case 'tumen':
                map.setZoom(10);
                map.setCenter(new google.maps.LatLng(coords[5][0], coords[5][1]));
                break;
            case 'rnd':
                map.setZoom(10);
                map.setCenter(new google.maps.LatLng(coords[6][0], coords[6][1]));
                break;
            case 'kirov':
                map.setZoom(10);
                map.setCenter(new google.maps.LatLng(coords[7][0], coords[7][1]));
                break;
            case 'iz':
                map.setZoom(10);
                map.setCenter(new google.maps.LatLng(coords[8][0], coords[8][1]));
                break;
            case 'novosib':
                map.setZoom(10);
                map.setCenter(new google.maps.LatLng(coords[9][0], coords[9][1]));
                break;
        }
      }
  });
  // end   google map in index.html

  // begin открываем окно выбора региона
  $('.geolocation-region__city').on('click', function() {
    $('.geolocation-region__popup-city').fadeIn();
    $('.popup__layer').fadeIn();
    $('body').addClass('no-scroll');
    return false;
  })
  // end открываем окно выбора региона


};