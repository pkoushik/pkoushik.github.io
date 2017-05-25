var skillsDiv = jQuery('#skills');

jQuery(window).on('scroll', function() {
    var winT = jQuery(window).scrollTop(),
        winH = jQuery(window).height(),
        skillsT = skillsDiv.offset().top;
    if (winT + winH > skillsT) {
        jQuery('.skillbar').each(function() {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 6000);
        });
    }
});