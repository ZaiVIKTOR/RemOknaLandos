<template>
    <section id="works" class="works-slider">
        <h3 class="title-section">Фототека</h3>
        <div class="container">
            <swiper
                :slides-per-view="2"
                :space-between="60"
                :modules="modules"
                navigation
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                v-if="width > 1010"
            >
                <swiper-slide
                    v-for="img in images"
                    :key="img"
                    class="works-slider-item"
                >
                    <img :src="require(`./img/${img}`)" alt="фото работы" />
                </swiper-slide>
                ...
            </swiper>
            <swiper
                :slides-per-view="1"
                :space-between="60"
                :modules="modules"
                navigation
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                v-else
            >
                <swiper-slide
                    v-for="img in images"
                    :key="img"
                    class="works-slider-item"
                >
                    <img :src="require(`./img/${img}`)" alt="фото работы" />
                </swiper-slide>
                ...
            </swiper>
        </div>
    </section>
</template>

<script>
import listImg from "./img/listNamesImg";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ["width"],
    data() {
        return {
            modules: [Navigation],
            images: listImg,
        };
    },
    methods: {
        onSwiper(swiper) {},
        onSlideChange() {},
    },
};
</script>

<style lang="scss">
.works-slider {
    padding-top: 100px;
    user-select: none;
}

.works-slider-item {
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;

    img {
        width: 400px;
        border-radius: 20px;
    }
}

.works-slider .swiper-button-next,
.swiper-button-prev {
    color: #fff;
}

.light .works-slider .swiper-button-next,
.swiper-button-prev {
    color: #212121;
}

@media (max-width: 500px) {
    .works-slider-item {
        img {
            width: 300px;
        }
    }
}
</style>
