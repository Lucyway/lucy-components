$(window).scroll(function() {
    var $onScrollChangeClass = $('#sticker');
    $(this).scrollTop() > 230 ? $onScrollChangeClass.addClass("onScrollChanged") : $onScrollChangeClass.removeClass("onScrollChanged");
});

$(window).scroll(function() {
    var $onScrollChangeClass = $('#homeTitle');
    $(this).scrollTop() > 400 ? $onScrollChangeClass.addClass("onScrollChanged") : $onScrollChangeClass.removeClass("onScrollChanged");
});