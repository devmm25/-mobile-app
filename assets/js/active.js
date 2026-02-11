/*
Template: Applio - App Landing  HTML Template
Author: Modina Theme
*/

(function($) {
    "use strict";

    $(document).ready( function() {
        
        if($('.brands-carousel-active').length > 0) {
            $(".brands-carousel-active").owlCarousel({ 
                margin: 80,                                                                          
                responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items: 2,                    
                    },
                    // breakpoint from 768 up
                    768 : {
                        items: 3
                    },
                    // breakpoint from 992 up
                    992 : {
                        items: 3
                    },
                    
                    1191 : {
                        items: 5
                    },
                }
            });
        }

        if($('.mobile-screen-carousel').length > 0) {
            $(".mobile-screen-carousel").owlCarousel({ 
                dots: true,
                autoplayTimeout: 8000,
                loop:true,
                autoplay:true,                                                                    
                responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items: 2,                   
                    },
                    // breakpoint from 768 up
                    768 : {
                        items: 3,
                    },
                    // breakpoint from 992 up
                    992 : {
                        items: 4,
                        margin: 30,
                    },
                    
                    1191 : {
                        items: 5,
                        margin: 30,
                    },
                }
            });
        }

        if($('.testimonial-carouel-active').length > 0) {
            $(".testimonial-carouel-active").owlCarousel({        
                items: 1,   
                loop: true,
                margin: 10,
                autoplayTimeout: 8000,
                autoplay:true,
                nav: true,          
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            });
        }

        if($('.testimonial-items-active').length > 0) {
            $(".testimonial-items-active").owlCarousel({        
                items: 2,
                dots: true,   
                loop: true,
                margin: 50,
                autoplayTimeout: 8000,
                autoplay:true,
                nav: true,
                responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items: 1,                    
                    },
                    // breakpoint from 992 up
                    992 : {
                        items: 2
                    },
                },          
                navText: ['<i class="fal fa-chevron-left"></i>', '<i class="fal fa-chevron-right"></i>'],
            });
        }


        /* =============================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            fixedContentPos: false
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-video, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        
        /*==========================
           Scroll To Up Init
        ============================*/
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '1110', // Distance from top before showing element (px)
            topSpeed: 2000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 300, // Animation in speed (ms)
            animationOutSpeed: 300, // Animation out speed (ms)
            scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

        //# Smooth Scroll
        $('#responsive-menu a').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '85';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });

        // Sticky Menu
        $(window).scroll(function() {
            var Width = $(document).width();

            if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
                if (Width > 767) {
                    $("header").addClass("sticky");
                }
            } else {
                $("header").removeClass("sticky");
            }
        });

        $('.container').imagesLoaded(function() {
            $('.portfolio-cat-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
            });
        });

        var catButton = '.portfolio-cat-filter button';

        $(catButton).on('click', function(){
            $(catButton).removeClass('active');
            $(this).addClass('active');
        });


        $('#hamburger').on('click', function() {            
            $('.mobile-nav').addClass('show');
            $('.overlay').addClass('active');
        });

        $('.close-nav').on('click', function() {            
            $('.mobile-nav').removeClass('show');            
            $('.overlay').removeClass('active');          
        });

        $(".overlay").on("click", function () {
            $(".mobile-nav").removeClass("show");
            $('.overlay').removeClass('active');
        });

        $("#mobile-menu").metisMenu();

        new WOW().init();


        const counterUp = window.counterUp.default

        const callback = entries => {
            entries.forEach( entry => {
                const el = entry.target
                if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
                    counterUp( el, {
                        duration: 3500,
                        delay: 15,
                    } )
                    el.classList.add( 'is-visible' )
                }
            } )
        }

        const IO = new IntersectionObserver( callback, { threshold: 1 } )

        const el = document.querySelectorAll( '.single-funfact-item h3, .our-experience h1, .single-fact .digit span, .digit-count span' );
        el.forEach((el) => {
            IO.observe(el);
        });


        $('.side-menu-toggle, .offcanvas-btn').on('click', function() {            
            $('.offset-menu').addClass('show');
        });

        $('#offset-menu-close-btn').on('click', function() {            
            $('.offset-menu').removeClass('show');
        });

        $('.search-btn').on('click', function() {            
            $('.search-form-wrapper').toggleClass('show');
            $('.search-btn').toggleClass('active');
        });

        
    }); // end document ready function

    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }
    
    loader();

})(jQuery); // End jQuery
