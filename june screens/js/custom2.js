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
    rtl: true,
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