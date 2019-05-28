 function initMap() {
    // The location of Unigran
    var unigran = { lat: -22.213175, lng: -54.8269757 };
    // The map, centered at Unigran
    var map = new google.maps.Map(
      document.getElementById('map'), { zoom: 13, center: unigran });
    // The marker, positioned at Unigran
    var marker = new google.maps.Marker({ position: unigran, map: map });
  }