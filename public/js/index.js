$(function() {
    var TITLE_IMAGE_1 = '/images/title1.png';
    var TITLE_IMAGE_2 = '/images/title2.png';

    $('html').mousemove(function(e) {
        //$('html').animate({'background-color': rgb_color(), 'queue': false}, 5000);
    }).click(function(e) {
        title_animation(); 
    });

    function rgb_color() {
        return 'hsl(' + [gen_color(255), '50%', '30%'].join(',') + ')';
    }

    function gen_color(num) {
        return Math.floor(Math.random() * num);
    }

    function title_animation_1() {
        $('img#title_image')
            .attr('src', TITLE_IMAGE_1);
    }

    function title_animation_2() {
        $('img#title_image')
            .attr('src', TITLE_IMAGE_2);
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
        $('html').css({'background-color': rgb_color()});
    }
    init();
});
