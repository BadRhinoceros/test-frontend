import Swiper from 'swiper'

window.onload = function () {
    new Swiper ('.main-slider', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        effect: 'fade',

        navigation: {
            nextEl: '.main-slider__next.slider__next--wh',
            prevEl: '.main-slider__prev.slider__prev--wh',
        },

        fadeEffect: {
            crossFade: true
        },
    })

    new Swiper ('.ice-info', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        effect: 'fade',

        navigation: {
            nextEl: '.ice-info__next.slider__next--orange',
            prevEl: '.ice-info__prev.slider__prev--orange',
        },

        fadeEffect: {
            crossFade: true
        },
    })

    // new Swiper('.djelato__sorts-slider', {
    //     direction: 'horizontal',
    //     slidesPerView: 1,
    //     loop: true,
    //     noSwiping: true,
    //     noSwipingClass: 'swiper-slide',
    //     effect: 'fade',

    //     navigation: {
    //         nextEl: '.djelato__sorts-next',
    //         prevEl: '.djelato__sorts-prev',
    //     },

    //     fadeEffect: {
    //         crossFade: true
    //     },
    // })

    // Подрубать только на десктопе
    new Swiper('.certifications__slider-wrap', {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 40,
    })
}