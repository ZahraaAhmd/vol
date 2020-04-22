/*** customers slider  */

$('.related-slide').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',

    responsive: [{
            breakpoint: 992,
            infinite: true,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            infinite: true,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    dots: false,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',

    asNavFor: '.slider-nav-thumbnails',


});

$('.slider-nav-thumbnails').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-up"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-down"></i></button>',
    verticalSwiping: true,
    vertical: true,
    responsive: [{
        breakpoint: 767,
        infinite: true,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',

        }
    }]

});
/**start nav scroll *  */

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".navbar").addClass("fixed");
        } else {
            $(".navbar").removeClass("fixed");
        }
    })
    $(".qt-plus").click(function() {
        $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);

    });

    $(".qt-minus").click(function() {

        child = $(this).parent().children(".qt");

        if (parseInt(child.html()) > 1) {
            child.html(parseInt(child.html()) - 1);
        }

        $(this).parent().children(".full-price").addClass("minused");

    });

});
$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});