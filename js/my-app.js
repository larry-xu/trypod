// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('#tab1', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

var listingsView = myApp.addView('#tab3', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('listing', function (page) {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 1.305024, lng: 103.774007},
        zoom: 14
    });
});