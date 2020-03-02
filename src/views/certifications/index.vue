<template lang="pug">
    section.certifications.page__inner
        .djelato__title-block
            h3.djelato__title Сертификаты
        .certifications__slider
            .certifications__slider-block
                .certifications__slider-wrap
                    .swiper-wrapper
                        .swiper-slide.certifications__slide
                            .certifications__item
                        .swiper-slide.certifications__slide
                            .certifications__item
                        .swiper-slide.certifications__slide
                            .certifications__item
                        .swiper-slide.certifications__slide
                            .certifications__item
</template>

<script>
// import { getCertificates } from '@/api/about'
import Swiper from 'swiper'

export default {
    data() {
        return {
            certificates: ''
        }
    },
    created() {
        // getCertificates.then(response => {
        //     if () {

        //     } else {
                
        //     }
        // }).catch(error => {
        //     console.log(error)
        // })
    },
    mounted() {
        // Если перелетать через VueRouter, то не происходит инициализация слайдера
        // Димон, возможно костыль, по документациям!
        new Swiper('.certifications__slider-wrap', {
            direction: 'horizontal',
            slidesPerView: 3,
            spaceBetween: 40,
        });
    }
}
</script>