$('a[href*="#"]:not([href="#"])').click(function () {
    // can use ' or " to wrap
    // a[href*="#"] gets all anchors <a> that contains # in href
    // but :not([href="#"]) exludes anchors with href exactly equal to #
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});