// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('#tab1', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

var gearView = myApp.addView('#tab2', {
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

myApp.onPageInit('messages', function (page) {
    var myMessages = $$('.messages')[0].f7Messages;
    var myMessagebar = $$('.messagebar')[0].f7Messagebar;

    $$('.messagebar .link').on('click', function () {
        // Message text
        var messageText = myMessagebar.value().trim();
        // Exit if empy message
        if (messageText.length === 0) return;

        // Empty messagebar
        myMessagebar.clear()

        var messageType = 'sent';

        // Avatar and name for received message
        var avatar = 'http://lorempixel.com/output/people-q-c-100-100-1.jpg';
        // Add message
        myMessages.addMessage({
            // Message text
            text: messageText,
            // Random message type
            type: messageType,
            // Avatar and name:
            avatar: avatar
        });
        setTimeout(msgResponse, 3000);
    });

    var responseIndex = 0
    var responses = ['Monday at 9am', 'Great!'];
    function msgResponse() {
        var messageText = responses[responseIndex++];
        var messageType = 'received';

        // Avatar and name for received message
        var avatar = 'http://lorempixel.com/output/people-q-c-100-100-9.jpg';
        myMessages.addMessage({
            // Message text
            text: messageText,
            // Random message type
            type: messageType,
            // Avatar and name:
            avatar: avatar
        });
    }
});

$$('.popup-request').on('close', function () {
    myApp.showTab('#tab2');
});

myApp.onPageInit('requests', function (page) {
    $$('.respond').once('click', function () {
        var buttons = [
            {
                text: 'Accept request',
                bold: true,
                onClick: acceptRequest
            },
            {
                text: 'Decline request'
            },
            {
                text: 'Cancel',
                color: 'red'
            },
        ];
        myApp.actions(buttons);
    });
});

function acceptRequest() {
    $$('.requests-cat1').text('Current requests');
    $$('.respond').text('Handoff');
    $$('.respond').attr('href', 'handoff.html');
}