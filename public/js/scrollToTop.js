$(document).ready(function(){
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
$('.scrollup').click(function(event){
event.preventDefault();
$("body, html").animate({ scrollTop: 0 }, 600);
return false;
});
});
