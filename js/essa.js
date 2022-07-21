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

    $('.more').mouseover(function () {
        $('.sec01').css('filter', 'brightness(70%)');
    })

    $('.more').mouseout(function () {
        $('.sec01').css('filter', 'none');
    })
})

