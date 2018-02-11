//navbar animation
var $document = $(document),
    $element = $('.navbar'),
    navbarDefault = 'navbar-default',
navbarTransparent = 'navbar-transparent';

fadeInDown ='fadeInDown';

$document.scroll(function(){
    if ($document.scrollTop()>= 100){
        $element.addClass(navbarDefault);
        $element.removeClass(navbarTransparent);
        
        $element.addClass(fadeInDown);
    } else {
        $element.addClass(navbarTransparent);
        $element.removeClass(navbarDefault);
        
        $element.removeClass(fadeInDown);
    }
});
/**********slider***********/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" Active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " Active";
    setTimeout(showSlides, 1500); // Change image every 5 seconds
}
//add class to navbar list
$(document).ready(function(){
  $('nav ul li a').addClass('hvr-shutter-out-horizontal');
})
