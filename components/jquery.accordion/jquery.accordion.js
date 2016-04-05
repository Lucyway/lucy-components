// simple accordion jquery+css
if (document.getElementById("accordion")) {
    (function($) {
        var allPanels = $('.ac-inner').hide();
        $('.ac-item-link').click(function() {
            allPanels.slideUp();
            $(this).parent().next().slideDown();
            $('.ac-item').removeClass("open");
            $(this).parent().addClass("open");
            return false;
        });
    })(jQuery);
}
//END