/*js*/
$(function() {
    $(".supportList li").each(function(index, item) {
        var status = false;
        $(this).bind('click', function() {
            if (!status) {
                $(this).find('.longDescript').slideDown();
                $(this).find('.down').hide();
                $(this).find('.up').show();
                status = true;
            } else {
                $(this).find('.longDescript').slideUp();
                $(this).find('.down').show();
                $(this).find('.up').hide();
                status = false;
            }
        });
    });

    $('#banner').flexslider({
        slideshowSpeed: 4000,
        namespace: 'banner-',
        animation: "slide",
        controlNav: false
    });

    $('#kvIndex').flexslider({
        slideshowSpeed: 4000,
        namespace: 'kvindex-',
        animation: "slide",
        controlNav: "thumbnails"
    });


    $('#gameSlider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });

    $("#tab .cut-bar ul li").each(function(ind, item) {
        $(this).bind('click', function() {
            var tabCt = $('.img_content').find('.game_tiles');
            $(this).addClass('current').siblings().removeClass('current');
            $(tabCt).fadeOut();
            $(tabCt).eq(ind).fadeIn();
        });
    });

});
