<template>
    <header class="l-header">
        <div class="container">
            <img
                v-if="dark_theme.theme"
                src="./img/dark/logo.png"
                alt="РЕМ-ОКНА"
                class="logo"
            />
            <img
                v-else
                src="./img/light/logo.png"
                alt="РЕМ-ОКНА"
                class="logo"
            />

            <div class="--right">
                <ul class="header-links" v-if="width > 840">
                    <li class="header-links-item">
                        <a href="#main-block" class="header-links-link"
                            >Главная</a
                        >
                    </li>
                    <li class="header-links-item">
                        <a href="#uslugi" class="header-links-link">Услуги</a>
                    </li>

                    <li class="header-links-item">
                        <a href="#otzivi" class="header-links-link">Отзывы</a>
                    </li>

                    <li class="header-links-item">
                        <a href="#form" class="header-links-link">Заявка</a>
                    </li>
                </ul>

                <ul class="phones">
                    <li><a href="tel:+79171055985">+7 (917) 105-59-85</a></li>
                    <li><a href="tel:+79371008097">+7 (937) 100-80-97</a></li>
                </ul>

                <ul class="messengers" v-if="width > 840">
                    <a href="https://t.me/kaziev74" target="_blank"
                        ><img src="@/assets/telegram.svg" alt="telegram"
                    /></a>
                    <a href="https://wa.me/789171055985" target="_blank"
                        ><img src="@/assets/WhatsApp.png" alt="whatsapp"
                    /></a>
                </ul>

                <switch-theme
                    v-if="width > 840"
                    @getValue="setTheme"
                    :themeValue="dark_theme.theme"
                />

                <div
                    class="menu-burger-btn"
                    :class="burger ? '--active' : ''"
                    @click="closeBurger"
                    v-if="width <= 840"
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div
            class="burger-menu"
            :class="burger == false ? '--hidden' : ''"
            v-if="width <= 840"
        >
            <switch-theme
                class="mobile-switch"
                @getValue="setTheme"
                :themeValue="dark_theme.theme"
            />

            <ul class="messengers">
                <a href="https://t.me/kaziev74" target="_blank"
                    ><img src="@/assets/telegram.svg" alt="telegram"
                /></a>
                <a href="https://wa.me/789171055985" target="_blank"
                    ><img src="@/assets/WhatsApp.png" alt="whatsapp"
                /></a>
            </ul>

            <ul class="header-links">
                <li @click="closeBurger" class="header-links-item">
                    <a href="#main-block" class="header-links-link">Главная</a>
                </li>
                <li @click="closeBurger" class="header-links-item">
                    <a href="#uslugi" class="header-links-link">Услуги</a>
                </li>
                <li @click="closeBurger" class="header-links-item">
                    <a href="#otzivi" class="header-links-link">Отзывы</a>
                </li>

                <li @click="closeBurger" class="header-links-item">
                    <a href="#form" class="header-links-link">Заявка</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import { useDarkThemeStore } from "@/assets/js/darkThemStore";
export default {
    name: "l-header",
    props: ["width"],
    data() {
        return {
            dark_theme: useDarkThemeStore(),
            burger: false,
        };
    },
    methods: {
        setTheme(theme) {
            this.dark_theme.setTheme(theme);
            theme == false
                ? document.querySelector("html").classList.add("light")
                : document.querySelector("html").classList.remove("light");
        },

        closeBurger() {
            this.burger = !this.burger;
        },
    },
};
</script>

<style scoped lang="scss">
.l-header {
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    min-width: 340px;

    &::before {
        content: "";
        width: 200%;
        height: 200%;
        position: absolute;
        top: -100%;
        left: 0;
        filter: blur(8px);
        background-color: rgba(18, 18, 18, 0.7333333333);
        backdrop-filter: blur(0.01px);
        box-shadow: 10px 0px 30px #121212ce;
    }

    .--right {
        display: flex;
        gap: 40px;
        align-items: center;
    }
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
}

.logo {
    width: 200px;
}

.header-links {
    display: flex;
    gap: 10px;

    .header-links-link {
        color: #fff;
        font-size: 16px;
        padding: 10px 15px;
        transition: 0.3s ease;
        border-radius: 30px;

        &.--active {
            background-color: #bafa20;
            color: #121212;
        }

        &:hover {
            background-color: #bafa20;
            color: #121212;
        }
    }
}

.light .l-header {
    &::before {
        background-color: #b8ea97d2;
    }
}

.light .header-links {
    .header-links-link {
        color: #212121;
    }
}

.phones {
    display: flex;
    flex-direction: column;
    gap: 10px;
    a {
        font-size: 16px;
        color: #fff;
        text-decoration: underline;
    }
}

.light .phones {
    a {
        color: #212121;
    }
}

.messengers {
    display: flex;
    align-items: center;
    gap: 10px;
    a {
        img {
            width: 50px;
        }
    }
}

@media (max-width: 980px) {
    .header-links .header-links-link {
        font-size: 14px;
    }

    .messengers {
        display: flex;
        align-items: center;
        gap: 10px;
        a {
            img {
                width: 40px;
            }
        }
    }

    .l-header {
        .--right {
            gap: 20px;
        }
    }

    .logo {
        width: 150px;
    }

    .phones {
        gap: 8px;
        a {
            font-size: 14px;
        }
    }
}

.menu-burger-btn {
    width: 40px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    position: relative;

    &.--active {
        div:nth-child(2) {
            transform: rotate(45deg);
            position: absolute;
            margin: auto;
            bottom: 0;
            top: 0;
        }
        div:nth-child(1),
        div:nth-child(3) {
            transform: rotate(-45deg);
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
        }
    }

    div {
        width: 100%;
        height: 4px;
        border-radius: 10px;
        background-color: #fff;
    }
}

.burger-menu {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 78px;
    left: 0;
    backdrop-filter: blur(10px);
    padding: 30px 20px;
    background-color: #212121;
    transition: 0.5s ease;
    display: flex;
    flex-direction: column;

    &.--hidden {
        transform: translateX(-100%);
    }

    ul {
        flex-direction: column;
        gap: 20px;

        &.messengers {
            flex-direction: row;
            margin-bottom: 20px;
        }

        li {
            width: 100%;

            a {
                width: 100%;
                display: block;
            }
        }
    }
}

.light .burger-menu {
    background-color: #b8ea97;
}

.mobile-switch {
    margin-bottom: 20px;
}

.light {
    .menu-burger-btn {
        div {
            background-color: #212121;
        }
    }
}

@media (max-width: 420px) {
    .logo {
        width: 120px;
    }

    .menu-burger-btn {
        width: 35px;
        height: 25px;

        div {
            height: 4px;
        }
    }

    .phones {
        gap: 6px;
        a {
            font-size: 14px;
        }
    }

    .l-header {
        .--right {
            gap: 20px;
        }
    }
}
</style>
