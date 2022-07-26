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

    $('.left_slider').slick({
        arrows: false,
        slidesToScroll: 1,
        fade: true,
    });

    $('.right_slider').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        asNavFor: '.left_slider',
    })

    $('.fabric_arrow i:nth-child(1)').on('click', function () {
        $('.right_slider').slick('slickPrev')
    })

    $('.fabric_arrow i:nth-child(2)').on('click', function () {
        $('.right_slider').slick('slickNext')
    })

})

AOS.init({
    offset: 150,
    duration: 800,
    easing: 'ease-in-out',
});


