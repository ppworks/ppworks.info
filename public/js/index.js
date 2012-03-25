$(function() {
    var TITLE_IMAGE_1 = '/images/title1.png';
    var TITLE_IMAGE_2 = '/images/title2.png';

    $('html').mousemove(function(e) {
        $('html').animate({'background-color': rgb_color(), 'queue': false}, 5000);
    }).click(function(e) {
        title_animation(); 
    });

    function rgb_color() {
        return 'rgb(' + [gen_color(), gen_color(), gen_color()].join(',') + ')';
    }

    function gen_color() {
        return Math.floor(Math.random() * 255);
    }

    function title_animation_1() {
        $('img#title_image')
            .attr('src', TITLE_IMAGE_1);
        if ($.browser.msie && $.browser.version < 7.0) {
            DD_belatedPNG.fix('.fixPNG');
        }
    }

    function title_animation_2() {
        $('img#title_image')
            .attr('src', TITLE_IMAGE_2);
        if ($.browser.msie && $.browser.version < 7.0) {
            DD_belatedPNG.fix('.fixPNG');
        }
    }

    function title_animation() {
        $('img#title_image')
            .animate({fontSize: 1}, 80, 'linear', title_animation_2)
            .animate({fontSize: 1}, 80, 'linear', title_animation_1)
            .animate({fontSize: 1}, 80, 'linear', title_animation_2)
            .animate({fontSize: 1}, 80, 'linear', title_animation_1)
        ;
    }

    function init() {
        var img = new Image();
        img.onload = function(e) {
            title_animation();
        };
        img.src = TITLE_IMAGE_2;
        $('img#title_image').addClass('fixPNG');
    }
    init();
});
