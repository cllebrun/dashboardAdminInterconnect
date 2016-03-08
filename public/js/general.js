
var markerMirage;
var markerBellagio;
var markerHarley;
var markerSign;
var markerMandalay;
var imageLightOn;
var imageLightOff;
var simulstate ="realtime";

var initMap = function(){
  
  var myLatLngCenter = {lat: 36.100774, lng: -115.173149};
  var myLatLngMirage = {lat: 36.121410, lng: -115.172102};
  var myLatLngBellagio = {lat: 36.112566, lng: -115.173068};
  var myLatLngMandalay = {lat: 36.0906428, lng: -115.1812648};
  var myLatLngSign = {lat: 36.081750, lng: -115.172532};
  var myLatLngHarley = {lat: 36.107802, lng: -115.172729};

  imageLightOn = new google.maps.MarkerImage(
    'images/light.png', 
    null,
    null,
    null ,
    new google.maps.Size(25, 25)// size
  );

  imageLightOff = new google.maps.MarkerImage(
    'images/nonlight.png', 
    null,
    null,
    null,
    new google.maps.Size(25, 25) // size
  );

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatLngCenter
  });


  // mirage
  markerMirage = new google.maps.Marker({
    position: myLatLngMirage,
    icon: imageLightOn,
    map: map,
    title: 'Mirage Connected Lamp'
  });
  var contentStringM = '<div id="content"><h4 id="firstHeading" class="firstHeading">Mirage Connected Lamp</h4><div id="street"></div></br><div id="bodyContent"><p><b>Lamp type: </b>LED</p><p><b>Solar panel: </b>8 W</p></div></div>';

  var infoWindowM = new google.maps.InfoWindow({
      content: contentStringM
  });
  markerMirage.addListener('click', function() {
    infoWindowM.open(map, markerMirage);
    var pano = null;
    google.maps.event.addListener(infoWindowM, 'domready', function () {
    
      pano = new google.maps.StreetViewPanorama(document.getElementById("street"), {
        position: myLatLngMirage,
        zoomControl: false,
        enableCloseButton: false,
        addressControl: false,
        panControl: false,
        linksControl: false
      });
    });
  });

  // Bellagio
  markerBellagio = new google.maps.Marker({
    position: myLatLngBellagio,
    icon: imageLightOn,
    map: map,
    title: 'Bellagio Connected Lamp'
  });

  var contentStringB = '<div id="content"><h4 id="firstHeading" class="firstHeading">Bellagio Connected Lamp</h4><div id="street"></div></br><div id="bodyContent"><p><b>Lamp type: </b>LED</p><p><b>Solar panel: </b>8 W</p></div></div>';

  var infoWindowB = new google.maps.InfoWindow({
      content: contentStringB
  });
  markerBellagio.addListener('click', function() {
    infoWindowB.open(map, markerBellagio);
    var pano = null;
    google.maps.event.addListener(infoWindowB, 'domready', function () {
    
      pano = new google.maps.StreetViewPanorama(document.getElementById("street"), {
        position: myLatLngBellagio,
        zoomControl: false,
        enableCloseButton: false,
        addressControl: false,
        panControl: false,
        linksControl: false
      });
    });
  });

  // Mandalay
  markerMandalay = new google.maps.Marker({
    position: myLatLngMandalay,
    icon: imageLightOn,
    map: map,
    title: 'Mandalay bay EXPO Connected Lamp'
  });
  var contentStringMB = '<div id="content"><h4 id="firstHeading" class="firstHeading">Mandalay Connected Lamp</h4><div id="street"></div></br><div id="bodyContent"><p><b>Lamp type: </b>LED</p><p><b>Solar panel: </b>8 W</p><p><a href="home.html">DETAILS</a></p></div></div>';

  var infoWindowMB = new google.maps.InfoWindow({
      content: contentStringMB
  });
  markerMandalay.addListener('click', function() {
    infoWindowMB.open(map, markerMandalay);
    var pano = null;
    google.maps.event.addListener(infoWindowMB, 'domready', function () {
    
      pano = new google.maps.StreetViewPanorama(document.getElementById("street"), {
        position: myLatLngMandalay,
        zoomControl: false,
        enableCloseButton: false,
        addressControl: false,
        panControl: false,
        linksControl: false
      });
    });
  });

  //Sign
  markerSign = new google.maps.Marker({
    position: myLatLngSign,
    icon: imageLightOn,
    map: map,
    title: 'Sign Connected Lamp'
  });
  var contentStringS = '<div id="content"><h4 id="firstHeading" class="firstHeading">Sign Connected Lamp</h4><div id="street"></div></br><div id="bodyContent"><p><b>Lamp type: </b>LED</p><p><b>Solar panel: </b>8 W</p></div></div>';

  var infoWindowS = new google.maps.InfoWindow({
      content: contentStringS
  });
  markerSign.addListener('click', function() {
    infoWindowS.open(map, markerSign);
    var pano = null;
    google.maps.event.addListener(infoWindowS, 'domready', function () {
    
      pano = new google.maps.StreetViewPanorama(document.getElementById("street"), {
        position: myLatLngSign,
        zoomControl: false,
        enableCloseButton: false,
        addressControl: false,
        panControl: false,
        linksControl: false
      });
    });
  });

  //Harley
  markerHarley = new google.maps.Marker({
    position: myLatLngHarley,
    icon: imageLightOn,
    map: map,
    title: 'Harley-Davidson Café Connected Lamp'
  });
  var contentStringH = '<div id="content"><h4 id="firstHeading" class="firstHeading">Harley-Davidson Café Connected Lamp</h4><div id="street"></div></br><div id="bodyContent"><p><b>Lamp type: </b>LED</p><p><b>Solar panel: </b>8 W</p></div></div>';

  var infoWindowH = new google.maps.InfoWindow({
      content: contentStringH
  });
  markerHarley.addListener('click', function() {
    infoWindowH.open(map, markerHarley);
    var pano = null;
    google.maps.event.addListener(infoWindowH, 'domready', function () {
    
      pano = new google.maps.StreetViewPanorama(document.getElementById("street"), {
        position: myLatLngHarley,
        zoomControl: false,
        enableCloseButton: false,
        addressControl: false,
        panControl: false,
        linksControl: false
      });
    });
  });
  setAllMarkerInVisible();
  

}



$("[name='realtime-switch']").bootstrapSwitch();
$("[name='night_switch']").bootstrapSwitch();
$("[name='day_switch']").bootstrapSwitch();

$('input[name="night_switch"]').on('switchChange.bootstrapSwitch', function(event, state) {
  if(state == true){
    setAllLightOn();
    setAllMarkerVisible();
    $('input[name="realtime-switch"]').bootstrapSwitch('state', false, true);
    $('input[name="day_switch"]').bootstrapSwitch('state', false, true);
  }else {
    setAllMarkerInVisible();
  }
  setState();
  saveState();
});
$('input[name="day_switch"]').on('switchChange.bootstrapSwitch', function(event, state) {
  if(state == true){
    setAllLightOff();
    setAllMarkerVisible();
    $('input[name="realtime-switch"]').bootstrapSwitch('state', false, true);
    $('input[name="night_switch"]').bootstrapSwitch('state', false, true);
  }else {
    setAllMarkerInVisible();
  }
  setState();
  saveState();
});
$('input[name="realtime-switch"]').on('switchChange.bootstrapSwitch', function(event, state) {
  if(state == true){
    setAllLightOff();
    setAllMarkerVisible();
    $('input[name="day_switch"]').bootstrapSwitch('state', false, true);
    $('input[name="night_switch"]').bootstrapSwitch('state', false, true);
  }else {
    setAllMarkerInVisible();
  }
  setState();
  saveState();
});

setAllMarkerVisible = function(){
  markerMirage.setVisible(true);
  markerBellagio.setVisible(true);
  markerMandalay.setVisible(true);
  markerSign.setVisible(true);
  markerHarley.setVisible(true);

}
setAllMarkerInVisible = function(){
  markerMirage.setVisible(false);
  markerBellagio.setVisible(false);
  markerMandalay.setVisible(false);
  markerSign.setVisible(false);
  markerHarley.setVisible(false);

}
setAllLightOn = function(){
  markerMirage.setIcon(imageLightOn);
  markerBellagio.setIcon(imageLightOn);
  markerMandalay.setIcon(imageLightOn);
  markerSign.setIcon(imageLightOn);
  markerHarley.setIcon(imageLightOn);
}
setAllLightOff = function(){
  markerMirage.setIcon(imageLightOff);
  markerBellagio.setIcon(imageLightOff);
  markerMandalay.setIcon(imageLightOff);
  markerSign.setIcon(imageLightOff);
  markerHarley.setIcon(imageLightOff);
}
document.getElementById("bt").addEventListener("click", function(){
    window.open("images/Streelight_dashboard.mht");
});

function setState(){
  //console.log($('input[name="realtime-switch"]').bootstrapSwitch('state'));
  if($('input[name="realtime-switch"]').bootstrapSwitch('state') == true){
    simulstate = "realtime";
  } else if($('input[name="day_switch"]').bootstrapSwitch('state') == true){
    simulstate = "day";
  }else if($('input[name="night_switch"]').bootstrapSwitch('state') == true){
    simulstate = "night";
  } else {
    simulstate = "nothing";
  } 
} 
function saveState() {
  if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    var state = simulstate;
   //converts to JSON string the Object
   state = JSON.stringify(state);
   
   //save the encoded accout to web storage
   localStorage.setItem('_simulstate', state);
  } else {
      // Sorry! No Web Storage support..
      console.log("Sorry! No Web Storage support");
  }
  
}
