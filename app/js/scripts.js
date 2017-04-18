$(function() {

    /* Mobile menu plugin settings */

    $('#my-menu').mmenu({
        extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: '<span class="yellow">S</span><span class="ampersand yellow">&</span><span class="white">Miller</span>'
        },
        offCanvas: {
            position: 'right'
        }
    });

    var api = $('#my-menu').data('mmenu');

    api.bind('opened', function () {
        $('.hamburger').addClass('is-active');
    }).bind('closed', function () {
        $('.hamburger').removeClass('is-active');
    });


    /* Owl Carousel plugin settings */


    $('.carousel-services').on('initialized.owl.carousel', function () {
       setTimeout(function () {
           serviceImgAutoHeight(); // Set timeout for correct work of this function
       }, 100)
    });

    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });

    /* Function for image auto height calculating in Service block */

    function serviceImgAutoHeight() {
        $('.services-block').each(function () {

            var ths = $(this),
                thsHeight = ths.find('.service-content').outerHeight();
                ths.find('.service-img').css('min-height', thsHeight);
        });
    }serviceImgAutoHeight();

    /* Selectize plugin settings */

    // $('select').selectize({
    //     create: true,
    // });

    /* AJAX registration form */

    $(document).ready(function () {

        //E-mail Ajax Send
        $("form").submit(function () { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function () {
                alert("Thank you!");
                setTimeout(function () {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });

    });


});




