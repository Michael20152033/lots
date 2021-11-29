$(window).load(function() {
    $('._swiper').slick({
        arrow: true,
        prevArrow: $('.control-main-slider__arrow_left'),
        nextArrow: $('.control-main-slider__arrow_right'),
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        // adaptiveHeight: true
    });


    $('.slider-lots__body').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        prevArrow: $('.control-slider-lots__arrow_prev'),
        nextArrow: $('.control-slider-lots__arrow_next'),
        infinite: true,
        speed: 600,
        responsive: [{
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    // slidesToScroll: 3,
                    // infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    // slidesToScroll: 2
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    // slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.slider-quotes__body').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,

        nextArrow: $('.control-slider-quotes__circle'),
        infinite: true,
        fade: true,
        speed: 1000,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 320,
                settings: {
                    adaptiveHeight: true,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    adaptiveHeight: false,
                }
            },
        ]
    });
});



let jopa = document.querySelector('.user-header__icon');

jopa.addEventListener('click', function(e) {
    let jopa2 = document.querySelector('.user-header__menu');
    jopa2.classList.toggle('_active');
});



//////////////////////////////////////////////////////////

let jopa3 = document.querySelector('.icon-menu');

jopa3.addEventListener('click', function(t) {
    jopa3.classList.toggle('change');

    let jopa4 = document.querySelector('.menu__body');
    jopa4.classList.toggle('_active');
});
////////////////////////////////////////////////////

document.addEventListener('click', function(e) {
    console.log(e);
    if (!e.target.closest('.user-header')) {
        let jopa2 = document.querySelector('.user-header__menu');
        jopa2.classList.remove('_active');
    }
});

$(window).load(function() {
    var sections = $('._scroll'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('actived');

                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('actived');
            }
        });
    });

    nav.find('a').on('click', function() {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
        }, 1000);

        return false;
    });
});