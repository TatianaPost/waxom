$(document).ready(function(){
    if (window.innerWidth <= 768) {
        $('.header__slider').slick({
            fade: true,
            speed: 800,
            dots: true,
            arrows: false
        }); 
        $('.realization__images').slick({
            speed: 800,
            dots: true,
        });
    } else {
        $('.header__slider').slick({
            fade: true,
            speed: 800,
            dots: true,
        }); 
    }
    if (window.innerWidth > 768 && window.innerWidth < 992) {
        $('.posts__slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true
        }); 
    } else if (window.innerWidth > 768) {
        $('.posts__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true
        });
    }
});

