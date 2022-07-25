$(function () {
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
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
    })

    $('.best_arrow i:nth-child(1)').on('click', function () {
        $('.best_slider').slick('slickPrev')
    })

    $('.best_arrow i:nth-child(2)').on('click', function () {
        $('.best_slider').slick('slickNext')
    })

    $('.more01').mouseover(function () {
        $('.sec01').css('filter', 'brightness(70%)');
    })

    $('.more01').mouseout(function () {
        $('.sec01').css('filter', 'none');
    })

    $('.more02').mouseover(function () {
        $('.sec02').css('filter', 'brightness(70%)');
    })

    $('.more02').mouseout(function () {
        $('.sec02').css('filter', 'none');
    })
})

