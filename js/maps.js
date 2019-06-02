 function initMap() {
    // Localização da Unigran
    var unigran = { lat: -22.213175, lng: -54.8269757 };
    // O mapa, centralizado na Unigran
    var map = new google.maps.Map(
      document.getElementById('map'), { zoom: 13, center: unigran });
    // O marcador, posicionado na Unigran
    var marker = new google.maps.Marker({ position: unigran, map: map });
  }