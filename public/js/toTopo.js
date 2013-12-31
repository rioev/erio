jQuery(document).ready(function() {
if (document.documentElement.clientWidth > 1024) {
jQuery("#to-top").hide();
jQuery(function () {
jQuery(window).scroll(function () {
if (jQuery(this).scrollTop() > 100) {
jQuery('#to-top').fadeIn();
}
else {
jQuery('#to-top').fadeOut();
}
});
jQuery('#to-top').click(function () {
jQuery('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
});
}
}); 