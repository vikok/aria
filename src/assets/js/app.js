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
  var uluru = {lat: 39.889965, lng: 18.110712};
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru
   });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: 'assets/img/contact/marker.png'
        });
}
  initMap();
  $( function() {
    $( ".datepicker" ).datepicker();
  } );


})();
