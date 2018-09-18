$( document ).ready(function() {
    $(".learn-more-btn").mouseenter(function(){
        $(this).css("opacity", "1");
    });
    $(".learn-more-btn").mouseleave(function(){
        $(this).css("opacity", "0");
    });
    
    //Hide form class for small devices
    if(window.innerWidth <= 992){
        $('.xx').addClass('none').removeClass('form-inline');
       
    }else{
         $('.xx').addClass('form-inline').removeClass('none');
        
    }

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        682:{
            items:2,
            nav:true
        },
        1024:{
            items:3,
            nav:true,
            loop:true
        }
    }
});
    
    
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtnPrev').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtnNext').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
    
    
    $(".custom-input").hide();
    
     $(".custom-search").click(function(){
        $(".custom-input").toggle(300);
    });
    
});




