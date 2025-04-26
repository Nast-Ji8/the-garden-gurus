<template>
    <button class="swp-btn swp-btn__prev" @click="slidePrev()">
        <i class="fa-solid fa-chevron-left"></i>
    </button>
    <button class="swp-btn swp-btn__next" @click="slideNext()">
        <i class="fa-solid fa-chevron-right"></i>
    </button>
    <div class="bg-slider">
        <swiper
            :slides-per-view="1"
            :space-between="0"
            :loop="true"
            :speed="800"
            :autoplay="{
                delay: 7000,
                disableOnInteraction: false,
            }"
            :navigation="true"
            :allowTouchMove="false"
            :modules="modules"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>
                <img src="@/assets/img/slide-1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/img/slide-2.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/img/slide-3.jpg" alt="">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { useSwiper, Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import {EffectFade, Autoplay, Navigation } from 'swiper/modules';

export default {
    name: "BgSlider",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {};
        const onSlideChange = () => {};
        const swiper = useSwiper();
        return {
            swiper,
            onSwiper,
            onSlideChange,
            modules: [EffectFade, Autoplay, Navigation],
        };
    },
    methods: {
        slideNext() {
            document.querySelector('.swiper-button-next').click();
        },
        slidePrev() {
            document.querySelector('.swiper-button-prev').click();
        },
    }
}
</script>

<style>

</style>