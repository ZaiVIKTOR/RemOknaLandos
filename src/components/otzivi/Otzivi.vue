<template>
    <section id="otzivi" class="otzivi">
        <div class="container">
            <h3 class="title-section">Отзывы</h3>
            <swiper
                :slides-per-view="3"
                :space-between="60"
                :modules="modules"
                navigation
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                v-if="otzivi.length > 0 && width > 1109 && successGet"
            >
                <swiper-slide
                    class="slider-item-swiper"
                    v-for="(otziv, i) in otzivi"
                    :key="i"
                >
                    <h2 class="otziv-title">
                        {{ otziv?.name }}
                    </h2>
                    <div class="rating">
                        <div
                            class="rating-star"
                            v-for="i in otziv?.rating"
                            :key="i"
                        >
                            <img src="./img/star_active.svg" alt="звезда" />
                        </div>
                        <div
                            class="rating-star"
                            v-for="i in 5 - otziv?.rating"
                            :key="i"
                        >
                            <img src="./img/star.svg" alt="звезда" />
                        </div>
                    </div>
                    <p class="otziv-text">{{ otziv?.otziv }}</p>
                    <p>
                        <a
                            @click="
                                currentId = i;
                                popupOtziv = true;
                            "
                            class="chit-next"
                            href="#otzivi"
                            >Читать дальше</a
                        >
                    </p>
                </swiper-slide>
                ...
            </swiper>
            <swiper
                :slides-per-view="2"
                :space-between="60"
                :modules="modules"
                navigation
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                v-else-if="otzivi.length > 0 && width > 750 && successGet"
            >
                <swiper-slide
                    class="slider-item-swiper"
                    v-for="(otziv, i) in otzivi"
                    :key="i"
                >
                    <h2 class="otziv-title">
                        {{ otziv?.name }}
                    </h2>
                    <div class="rating">
                        <div
                            class="rating-star"
                            v-for="i in otziv?.rating"
                            :key="i"
                        >
                            <img src="./img/star_active.svg" alt="звезда" />
                        </div>
                        <div
                            class="rating-star"
                            v-for="i in 5 - otziv?.rating"
                            :key="i"
                        >
                            <img src="./img/star.svg" alt="звезда" />
                        </div>
                    </div>
                    <p class="otziv-text">{{ otziv?.otziv }}</p>
                    <p>
                        <a
                            @click="
                                currentId = i;
                                popupOtziv = true;
                            "
                            class="chit-next"
                            href="#otzivi"
                            >Читать дальше</a
                        >
                    </p>
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
                v-else-if="otzivi.length > 0 && width < 751 && successGet"
            >
                <swiper-slide
                    class="slider-item-swiper"
                    v-for="(otziv, i) in otzivi"
                    :key="i"
                >
                    <h2 class="otziv-title">
                        {{ otziv?.name }}
                    </h2>
                    <div class="rating">
                        <div
                            class="rating-star"
                            v-for="i in otziv?.rating"
                            :key="i"
                        >
                            <img src="./img/star_active.svg" alt="звезда" />
                        </div>
                        <div
                            class="rating-star"
                            v-for="i in 5 - otziv?.rating"
                            :key="i"
                        >
                            <img src="./img/star.svg" alt="звезда" />
                        </div>
                    </div>
                    <p class="otziv-text">{{ otziv?.otziv }}</p>
                    <p>
                        <a
                            @click="
                                currentId = i;
                                popupOtziv = true;
                            "
                            class="chit-next"
                            href="#otzivi"
                            >Читать дальше</a
                        >
                    </p>
                </swiper-slide>
                ...
            </swiper>
            <p v-else-if="otzivi?.length < 1 && successGet" class="not-otzivi">
                Отзывов пока нет
            </p>
            <div v-else class="loader-otzivi"></div>

            <main-btn
                @click="popup = true"
                class="btn-add-otziv"
                :link="'#otzivi'"
            >
                Написать отзыв
            </main-btn>

            <div
                class="popup-add-otziv popup-otziv"
                v-if="popupOtziv"
                @click="closePopup"
            >
                <div class="popup-add-otziv-body">
                    <h5>{{ otzivi[currentId]?.name }}</h5>
                    <div class="rating">
                        <div
                            class="rating-star"
                            v-for="i in otzivi[currentId]?.rating"
                            :key="i"
                        >
                            <img src="./img/star_active.svg" alt="звезда" />
                        </div>
                        <div
                            class="rating-star"
                            v-for="i in 5 - otzivi[currentId]?.rating"
                            :key="i"
                        >
                            <img src="./img/star.svg" alt="звезда" />
                        </div>
                    </div>
                    <p>
                        {{ otzivi[currentId]?.otziv }}
                    </p>
                </div>
            </div>

            <div class="popup-add-otziv" v-if="popup" @click="closePopup">
                <div class="popup-add-otziv-body">
                    <input
                        v-model="otzivData.name"
                        type="text"
                        name="FI"
                        placeholder="Иванов Иван"
                    />
                    <div class="rating">
                        <div
                            class="rating-star"
                            v-for="i in 5"
                            :key="i"
                            @mouseover="lenStars = i"
                            @mouseout="lenStars = 0"
                            @click="lenStarsSet = i"
                        >
                            <img
                                v-if="lenStars >= i || lenStarsSet >= i"
                                src="./img/star_active.svg"
                                alt="звезда"
                            />
                            <img v-else src="./img/star.svg" alt="звезда" />
                        </div>
                    </div>
                    <textarea
                        v-model="otzivData.otziv"
                        placeholder="Напишите отзыв о нас"
                    ></textarea>
                    <button @click="sendOtziv" class="btn-send">
                        <p v-if="successAdd">Отправить</p>
                        <span v-else class="loader"></span>
                    </button>
                </div>
            </div>
        </div>

        <div
            class="popup-mess"
            v-if="popupMessVis"
            @click="popupMessVis = false"
        >
            <div v-if="typePopup == 'success'" class="--green">
                <div class="check-mark">
                    <svg
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                    >
                        <path
                            d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                        />
                    </svg>
                </div>

                <p>
                    {{ popupMess }}
                </p>
            </div>

            <div v-if="typePopup == 'err'" class="--red">
                <div class="check-mark">
                    <svg
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                    >
                        <path
                            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                        />
                    </svg>
                </div>

                <p>
                    {{ popupMess }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";

import db from "@/assets/js/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ["width"],
    data() {
        return {
            otzivi: [],
            modules: [Navigation],
            popup: false,
            otzivData: {
                name: "",
                otziv: "",
            },
            lenStars: 0,
            lenStarsSet: 0,
            successAdd: true,
            successGet: false,
            popupOtziv: false,
            currentId: null,
            typePopup: "err",
            popupMess: "",
            popupMessVis: false,
        };
    },
    methods: {
        onSwiper(swiper) {},
        onSlideChange() {},
        openMess(mess, type) {
            this.popupMessVis = true;
            this.popupMess = mess;
            this.typePopup = type;
        },
        closePopup(e) {
            if (!e.target.closest(".popup-add-otziv-body")) {
                this.popup = false;
                this.popupOtziv = false;
            }
        },
        async sendOtziv() {
            console.log(this.otzivData);
            if (localStorage.getItem("sendOtziv")) {
                this.openMess("Вы не можете оставить отзыв два раза!", "err");
                return false;
            }
            const name = this.otzivData.name;
            const rating = this.lenStarsSet;
            const otziv = this.otzivData.otziv;
            if (name.trim().length == "") {
                this.openMess("Введите фамилию и имя!", "err");
                return false;
            }
            if (rating == 0) {
                this.openMess("Поставьте рейтинг!", "err");
                return false;
            }
            if (otziv.trim().length == "") {
                this.openMess("Напишите отзыв!", "err");
                return false;
            }

            this.successAdd = false;
            try {
                const docRef = await addDoc(collection(db, "otzivi"), {
                    name: name,
                    otziv: otziv,
                    rating: rating,
                });
                this.otzivData.name = "";
                this.otzivData.otziv = "";
                this.lenStars = 0;
                this.lenStarsSet = 0;
                console.log("Document written with ID: ", docRef.id);
                this.successAdd = true;
                this.popup = false;
                this.openMess("Отзыв успешно добавлен", "success");
                localStorage.setItem("sendOtziv", JSON.stringify(true));
            } catch (e) {
                this.openMess("Произошла ошибка. Отзыв не был добавлен", "err");
            }
            this.getOtzivi();
        },
        async getOtzivi() {
            this.successGet = false;
            const querySnapshot = await getDocs(collection(db, "otzivi"));
            querySnapshot.forEach(doc => {
                const data = doc.data();
                data.id = doc.id;
                if (!this.otzivi.find(otziv => otziv.id == data.id)) {
                    this.otzivi.push(data);
                }
                // console.log(doc.data())
                // console.log(`${doc.id} => ${doc.data()}`);
            });
            this.successGet = true;
        },
    },
    mounted() {
        // this.firebase.getDB();
        // this.firebase.getDataOnDB('otzivi');
        this.getOtzivi();
    },
};
</script>

<style lang="scss">
.otzivi {
    padding-top: 100px;
    padding-bottom: 20px;
}

.slider-item-swiper {
    color: #121212;
    background-color: #bafa21;
    padding: 30px 50px;
    border-radius: 20px;
    height: auto;
}

.btn-add-otziv {
    margin-top: 50px;
}

.rating {
    display: flex;
    margin: 0 auto;
}

.rating-star {
    box-sizing: content-box;
    width: 30px;
    cursor: pointer;
    padding: 0 10px;
}

.otzivi .swiper-button-next,
.otzivi .swiper-button-prev {
    color: #212121;
}

.otziv-title {
    margin-bottom: 10px;
}

.popup-mess {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0 0 0 / 0.3);
    backdrop-filter: blur(10px);
    z-index: 99999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    cursor: pointer;

    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }

    .check-mark {
        border-radius: 30px;
        background-color: #6bde00;
        width: fit-content;
        aspect-ratio: 1/1;
        padding: 20px;
        height: fit-content;

        svg {
            width: 70px;
            height: fit-content;
        }
    }

    .--red .check-mark {
        background-color: rgb(214, 23, 23);
    }

    p {
        font-size: 20px;
        color: #6bde00;
        padding: 0 20px;
        text-align: center;
    }

    .--red p {
        color: rgb(214, 23, 23);
    }
}

.not-otzivi {
    font-size: 16px;
    color: #fff;
    text-align: center;
}

.light .not-otzivi {
    color: #212121;
}

.otziv-text {
    line-height: 2rem;
    max-height: 8rem;
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    overflow: hidden !important;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
}

.popup-add-otziv {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0 0 0 / 0.5);
    backdrop-filter: blur(10px);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0 20px;

    .popup-add-otziv-body {
        cursor: default;
        padding: 30px;
        background-color: #bafa21;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        max-width: 500px;
        gap: 20px;
        width: 100%;

        input,
        textarea {
            padding: 20px 25px;
            font-size: 16px;
            background-color: #212121;
            border: none;
            border-radius: 10px;
            color: #fff;
        }

        textarea {
            height: 240px;
            resize: none;
            font-size: 14px;
        }

        .btn-send {
            background-color: #212121;
            color: #fff;
            padding: 15px 20px;
            font-size: 16px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            display: flex;
            justify-content: center;
        }
    }
}

.slider-item-swiper {
    .rating {
        .rating-star {
            padding: 0;
            width: 20px;
        }
        margin-bottom: 20px;
    }
}

// loader
/* HTML: <div class="loader"></div> */
.loader-otzivi {
    width: fit-content;
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    clip-path: inset(0 100% 0 0);
    animation: l5 2s steps(11) infinite;
    color: #fff;
    margin: 0 auto;
}
.light .loader-otzivi {
    color: #212121;
}
.loader-otzivi:before {
    content: "Loading...";
}
@keyframes l5 {
    to {
        clip-path: inset(0 -1ch 0 0);
    }
}

.chit-next {
    font-size: 16px;
    text-decoration: underline;
    color: #212121;
}

.popup-otziv {
    h5 {
        font-size: 24px;
        text-align: center;
    }

    p {
        font-size: 16px;
    }
}
</style>
