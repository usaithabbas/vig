$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* Scroll Home*/
srtop.reveal('.home .text-1', { delay: 200 });
srtop.reveal('.home .text-2', { delay: 200 });
srtop.reveal('.home .text-3', { delay: 200 });
srtop.reveal('.home a', { delay: 200 });

/* SCROLL ABOUT */
srtop.reveal('.about h2', { delay: 200 });
srtop.reveal('.about .about-content img', { delay: 200 });
srtop.reveal('.about p', { delay: 200 });
srtop.reveal('.about .text', { interval: 200 });

/*scroll services*/
srtop.reveal('.services .title', { delay: 200 });
srtop.reveal('.services .text p', { delay: 200 });
srtop.reveal('.services .card .box-1', { delay: 200 });
srtop.reveal('.services .card .box-2', { delay: 200 });
srtop.reveal('.services .card .box-3', { delay: 200 });

/*scroll skills*/
srtop.reveal('.skills .skills-content .text', { delay: 200 });
srtop.reveal('.skills .skills-content p', { delay: 200 });
srtop.reveal('.skills .skills-content .bars', { delay: 200 });

/*scroll more*/
srtop.reveal('.teams .title', { delay: 200 }); 
srtop.reveal('.teams .box .text p', { delay: 200 }); 

/*scroll contact*/
srtop.reveal('.contact .title', { delay: 200 });  
srtop.reveal('.contact .contact-content .text', { delay: 200 }); 
srtop.reveal('.contact .contact-content p', { delay: 200 });
srtop.reveal('.contact .row .info', { delay: 200 }); 
srtop.reveal('.contact .row .info .fas', { delay: 200 }); 
srtop.reveal('.contact .name', { delay: 200 }); 
srtop.reveal('.contact .email', { delay: 200 });
srtop.reveal('.contact .textarea', { delay: 200 });
srtop.reveal('.contact .button-area', { delay: 200 });   
srtop.reveal('.contact .field', { delay: 200 }); 
srtop.reveal('.contact .fa-user', { delay: 200 });
srtop.reveal('.contact .fa-map-marker-alt', { delay: 200 });  
srtop.reveal('.contact .fa-phone', { delay: 200 });