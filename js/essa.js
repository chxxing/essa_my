$(function () {

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.smenu').slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.smenu').removeAttr('style');
    });

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('.gnb').toggleClass('on');
        if ($('.gnb').hasClass('on')) {
            $('html, body').addClass('noScroll');
            $('.main_slider').slick('slickPause');
        } else {
            $('html, body').toggleClass('noScroll');
            $('.main_slider').slick('slickPlay');
        };
    });

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 4000,
    })


    $('.main_arrow i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    })

    $('.main_arrow i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext')
    })

    $('.best_slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrow: false,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }]
    })

    $('.best_arrow i:nth-child(1)').on('click', function () {
        $('.best_slider').slick('slickPrev')
    })

    $('.best_arrow i:nth-child(2)').on('click', function () {
        $('.best_slider').slick('slickNext')
    })

    $('.left_slider').slick({
        arrows: false,
        slidesToScroll: 1,
        fade: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrow: false,
                slidesToScroll: 1,
                fade: true,
            }
        }]
    });

    $('.right_slider').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        asNavFor: '.left_slider',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrow: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.left_slider',
            }
        }]
    })

    $('.fabric_arrow i:nth-child(1)').on('click', function () {
        $('.right_slider').slick('slickPrev')
    })

    $('.fabric_arrow i:nth-child(2)').on('click', function () {
        $('.right_slider').slick('slickNext')
    })

    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 800) {
            $('.toTop').fadeIn(300)
        } else {
            $('.toTop').fadeOut(1000)
        }
    });
})

AOS.init({
    offset: 150,
    duration: 800,
    easing: 'ease-in-out',
});


