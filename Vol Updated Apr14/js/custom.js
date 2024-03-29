/*** customers slider  */
var $status = $('.pagingInfo');
var $slickElement = $('.list-slider');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});
$('.list-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: true,
    /*speed: 800,
    autoplay: true,
    autoplaySpeed: 2000, */
    centerPadding: '130px',


    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><img src="images/left.svg"></button>',
    nextArrow: '<button class="slick-next"><img src="images/right.svg"></button>',
    responsive: [{
        breakpoint: 992,
        settings: {
            centerMode: false,
            centerPadding: '0',
        }
    }]
});
$(".partner-slide").slick({
    dots: false,
    arrows: true,
    infinite: true,
    rtl: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',

    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});
$(".event-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    /*autoplay: true,
    autoplaySpeed: 2000,*/
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><img src="images/event-left.svg"></button>',
    nextArrow: '<button class="slick-next"><img src="images/event-right.svg"></button>',

    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});
$("document").ready(function() {
    $(".accordion-heading").click(function() {
        $(this).parent(".accordion-group").toggleClass("active")
    })
})