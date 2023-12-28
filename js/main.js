$(document).ready(function(){
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > 0){
            $("header").addClass("dark")
        } else {
            $("header").removeClass("dark")
        }
     });

    $('.grid-gallery').masonry({
        originTop: true,
        percentPosition: true,
        itemSelector: '.grid-item',
        gutter: 15
    });

    
})

function go_to_gallery(){
    $('html, body').animate({
        scrollTop: $('.container-gallery').offset().top
      }, 200);
}

function go_to_contact(){
    $('html, body').animate({
        scrollTop: $('.container-contact').offset().top
      }, 200);
}

function go_to_about(){
    $('html, body').animate({
        scrollTop: $('.container-about').offset().top
      }, 200);
}