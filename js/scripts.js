jQuery(document).ready(function($){
    /**
     * Mobile navigation toggle
     * @param {mixed} event
     */

    const toggleMenu = (event) => {
        event.preventDefault();
        $('.js-menu-toggle').toggleClass('open');
        $('body').toggleClass('menu-open');
        // $('.header__navigation').fadeToggle();
    };

    $('.js-menu-toggle').on('click', toggleMenu);


    let i = 0;
    setInterval(function(){

     $('.slide.slide-'+i).siblings().fadeOut();
     $('.slide.slide-'+i).fadeIn();

     i++;
     if(i == 4){
         i = 0;
     }
    }, 2000);

    $('#reviews .review-slides').bxSlider({
        pause: 3000,
        controls: false,
        pager: false,
        adaptiveHeight: true,
        auto: true
    });

    if( $('#banner-slider .banner-slides .slide').length > 1 ){

        $('#banner-slider .banner-slides').bxSlider({
            pause: 3000,
            controls: false,
            pager: false,
            adaptiveHeight: false,
            auto: true,
            useCSS: false,
            tickerHover: false,
            onSlideAfter: function( slideElement, oldIndex, newIndex ){
                console.log(newIndex);
                $('.banner-content-inner-headline.headline-'+newIndex).siblings().hide()
                $('.banner-content-inner-headline.headline-'+newIndex).show();
            }
        });
    }

    $('.mobile-menu-drawer').on('click', '.menu-item-has-children', function(){
        $(this).toggleClass('active');
    });

});