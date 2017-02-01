
;(function() {
  $(document).foundation();
  $('.ba-slider').slick({
  	dots: true
  });
  $('.ba-slider-2').slick({
  	dots: true,
  	variableWidth: false
  });
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.889965, lng: 18.110712},
    scrollwheel: false,
    zoom: 14
  });
}
  initMap();
  var torreMarker = new google.maps.Marker({
      position: map,
      map: map,
      title: "Torre",
      icon: 'assets/img/contact/marker.png'
      });
})();
