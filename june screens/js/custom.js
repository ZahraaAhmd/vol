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
$(".customer-logos.slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
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
    });


});

// Select on pressing COPY
var els_copy = document.querySelectorAll("[data-copy]");
for (var i = 0; i < els_copy.length; i++) {
    var el = els_copy[i];
    el.addEventListener("submit", function(e) {
        e.preventDefault();
        var text = e.target.querySelector('input[type="text"]').select();
        document.execCommand("copy");
    });
}

// Select all text when pressing inside text field
var els_selectAll = document.querySelectorAll("[data-click-select-all]");
for (var i = 0; i < els_selectAll.length; i++) {
    var el = els_selectAll[i];
    el.addEventListener("click", function(e) {
        e.target.select();
    });
}

$("document").ready(function() {
    $(".save-edits").hide();
    $(".manage-block").click(function() {
        $(".manage-block").parent(".menu-block").removeClass("editable");
        $(this).parent(".menu-block").addClass("editable");
        $(".menu-overly").show();

    });
    $(".add-new").click(function() {

        $val1 = $(this).parents(".inner").find(".first-val option:selected").text();
        $val2 = $(this).parents(".inner").find(".second-val option:selected").text();
        $(this).parents(".inner").find(".added-blocks").append('<div class="personal-info">' + $val1 + ' - ' + $val2 + ' <i class="fa fa-close"></i></div>')
    });
    $(".add-new2").click(function() {
        $val3 = $(this).parents(".inner").find("input.interest").val();
        $(this).parents(".inner").find(".added-blocks").append('<div class="personal-info">' + $val3 + ' <i class="fa fa-close"></i></div>')
    });
    $(".close-modal,.edit-exp-modal .inner .options .btn").click(function() {
        $(this).parents(".menu-block").removeClass("editable");
        $(".menu-overly").hide();
    });
    $(".edit-job").click(function() {
        $(this).hide();
        $(this).parents(".box").find(".editable-block").attr('contenteditable', 'true').addClass("focused").focus();

        $(this).parents(".box").find(".save-edits").show();
    });
    $(".dashboard .training-box .bottom .btn").click(function() {
        $(this).parents(".train-part").hide();
        $(".download-cert ").slideDown(500);
    });
    $(".dashboard .download-cert .back").click(function() {
        $(this).parents(".download-cert").hide();
        $(".train-part").show(400);
    });
    $(".save-edits .btn").click(function() {
        $(this).parents(".save-edits").hide();
        $(this).parents(".box").find(".inner-box").attr('contenteditable', 'false');
        $(this).parents(".box").find(".edit-job").show();
    });
});
$(document).on('click', '.dashboard .edit-exp-modal .inner .personal-info .fa', function() {
    $(this).parent(".personal-info").remove();
});

(function() {
    var Uploader;

    Uploader = function() {
        'use-strict';
        class Uploader {
            constructor(element) {
                this.bindEvents = this.bindEvents.bind(this);
                this._$element = $(element);
                this._$fileUpload = this._$element.find('[type="file"]');
                this._$phantomBtn = this._$element.find('[data-trigger]');
                this._$image = this._$element.find('[data-image]');
                this.bindEvents();
            }

            bindEvents() {
                var self;
                self = this;

                // Connect phantomBtn to uploadBtn
                this._$phantomBtn.on('click', function() {

                    return self._$fileUpload.trigger('click');

                });

                // Detect when file upload is changed
                return this._$fileUpload.on('change', function() {
                    var file, fileReader, max_size, types, uploader;
                    uploader = $(this);
                    file = $(this)[0].files[0];
                    fileReader = new FileReader();
                    max_size = 10000000;
                    types = /(\.|\/)(gif|jpe?g|png)$/i;
                    if (!types.test(file.type) || !types.test(file.name)) {
                        alert('invalid file type');
                        uploader.val('');
                        return false;
                    }
                    if (file.size > max_size) {
                        alert('invalid file size');
                        uploader.val('');
                        return false;
                    }
                    if (file) {
                        fileReader.onload = function(e) {
                            var imageSrc;
                            imageSrc = e.target.result;
                            self.renderImage(imageSrc);
                        };
                        fileReader.readAsDataURL(file);
                    }
                });
            }

            removeImage() {
                return this._$image.attr('src', '');
            }

            renderImage(imageSrc) {
                this._$image.attr('src', imageSrc);
                return this.hidePhantomBtn();
            }

            hidePhantomBtn() {
                return this._$phantomBtn.hide();
            }

            showPhtantomBtn() {
                return this._$phantomBtn.show();
            }
        }

        ;

        Uploader.prototype._$element = null;

        Uploader.prototype._$fileUpload = null;

        Uploader.prototype._$phtantomBtn = null;

        Uploader.prototype._$image = null;

        return Uploader;

    }.call(this);

    this.Uploader = Uploader;

    if ($('[data-uploader]').length > 0) {
        $('[data-uploader]').each(function(index, element) {
            return new Uploader(element);
        });
    }

}).call(this);


//# sourceURL=coffeescript