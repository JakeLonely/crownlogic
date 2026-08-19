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
    $('.navbar-collapse a').each(function(){
        var href = $(this).attr('href');
        // Allow navigation for: external pages, home page with sections, or absolute URLs
        if(href.startsWith('/') || href.endsWith('.html') || href.startsWith('http')) {
            $(this).on('click', function(e){
                e.preventDefault();
                window.location.href = href;
            });
        }
    });
})