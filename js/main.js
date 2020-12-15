<<<<<<< HEAD
$(document).ready(function() {
    $('.overeffect').hover (
        function () {
            var _img = $(this).children().attr('src');
            _img = _img.replace('.png', '_on.png');
            console.log(_img);
            $(this).children().attr({src:_img});
        },
        function () {
            var _img = $(this).children().attr('src');
            _img = _img.replace('_on.png', '.png');
            console.log(_img);
            $(this).children().attr({src:_img});
        }
    );

    $(window).on('scroll', function () {
        var scrollY = $(this).scrollTop();
        console.log(scrollY);
        if (scrollY >= $(document).height() - $(this).height() - $('#footer').outerHeight()) $('.floating_bar').addClass('btm');
        else $('.floating_bar').removeClass('btm');
    });
=======
$(document).ready(function() {
    $('.overeffect').hover (
        function () {
            var _img = $(this).children().attr('src');
            _img = _img.replace('.png', '_on.png');
            console.log(_img);
            $(this).children().attr({src:_img});
        },
        function () {
            var _img = $(this).children().attr('src');
            _img = _img.replace('_on.png', '.png');
            console.log(_img);
            $(this).children().attr({src:_img});
        }
    );
>>>>>>> 7b24cdce72c9a88ea753312d4f1780526b45b70c
});