import Swiper from 'swiper';

import { Navigation } from 'swiper/modules';

const swiper = document.querySelector('.reviews__swiper');
const next = document.querySelector('.reviews__next');
const prev = document.querySelector('.reviews__prev');

const reviewsSwiper = new Swiper(swiper, {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 15,
    modules: [Navigation],

    navigation: {
        prevEl: prev,
        nextEl: next
    },

    breakpoints: {
        768:{
            slidesPerView: 2,
        },

        1360:{
            slidesPerView: 3,
        },


    }
});