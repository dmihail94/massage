//Show navigation
$('.hamburger').click(function() {
    $('.navigation').addClass('show-menu');
});
//Hide navigation
$('.hide-nav').click(function() {
    $('.navigation').removeClass('show-menu');
});

//Hide navigation when link is clicked
$('.navigation a').click(function() {
    $('.navigation').removeClass('show-menu');
});

//Add class hovered for evry li when the point is hovered
$('svg').mouseenter(function() {
    $(this).parent().addClass('hovered');
}).mouseleave(function() {
    $(this).parent().removeClass('hovered');
});

//Efect show at scroll
window.sr = ScrollReveal({ reset: true });

sr.reveal('#about', { duration: 500, distance: '20px', viewFactor: 0.2 });
sr.reveal('#experience', { duration: 500, distance: '20px', viewFactor: 0.2 });
sr.reveal('#education', { duration: 500, distance: '20px', viewFactor: 0.2 });
sr.reveal('#contact', { duration: 500, distance: '20px', viewFactor: 0.1 });


//Google Map API

function initMap() {
    var uluru = {
        lat: 40.657642,
        lng: 15.400962
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: uluru,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]

    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

//contact Form

$('#contact-form').submit(function(e) {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');

    if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        $.alert({
            title: 'Error!',
            content: 'Fill all inputs correctly!',
            type: 'red',
            boxWidth: '60%',
            useBootstrap: false,
            typeAnimated: true,
            buttons: {
                tryAgain: {
                    text: 'Try again',
                    btnClass: 'btn-red'

                }
            }
        });

    } else {
        $.ajax({
            url: "https://formspree.io/dmihail1994@gmail.com",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });
        e.preventDefault();
        $.alert({
            title: 'Success!',
            content: 'Sent!',
            type: 'green',
            boxWidth: '60%',
            useBootstrap: false,
            typeAnimated: true,
            buttons: {
                tryAgain: {
                    text: 'Close',
                    btnClass: 'btn-green'

                }
            }
        });
        $(this).get(0).reset();

    }
});

//Fixed nav at scroll

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height >= 150 && height < 250) {
        $('#nav').addClass('opacity');
    } else if (height >= 250) {
        $('#nav').addClass('fixed-nav');
    } else {
        $('#nav').removeClass('fixed-nav');
        $('#nav').removeClass('opacity');
    }
});

//Show languages

$('.change-lang').click(function() {
    $('.language').toggle('fast');
    $('i.fa').toggleClass('up_arrow');
});

$(function() {
    $('.loader').css('display','none');
});

