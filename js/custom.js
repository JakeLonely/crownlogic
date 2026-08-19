// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

$(function() {
    new WOW().init();
    $('.templatemo-nav').singlePageNav({
    	offset: 70
    });

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    /* Allow navigation to external pages (privacy policy, etc)
    -----------------------------------------------*/
    $('.navbar-collapse a[href^="/"], .navbar-collapse a[href$=".html"]').each(function(){
        if($(this).attr('href').includes('#')) return; // Skip anchor-only links
        $(this).on('click', function(e){
            window.location.href = $(this).attr('href');
        });
    });
})