$(document).ready(function() {
    $('.goods_list .goods_img').hover (
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
});