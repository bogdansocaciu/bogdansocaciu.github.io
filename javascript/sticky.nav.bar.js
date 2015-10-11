$(document).ready(function() {
    var nav = $("#nav");
    var pos = nav.position();

    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top)
            nav.addClass("nav-fixed");
        else
            nav.removeClass("nav-fixed");
    });

});