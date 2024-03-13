<template>
    <div :class="dark_theme.theme ? '' : 'light'">
        <Header :width="width"></Header>
        <main>
            <MainBlock></MainBlock>
            <uslugiSlider></uslugiSlider>
            <Actions></Actions>
            <worksSlider :width="width"></worksSlider>
            <Otzivi :width="width"></Otzivi>
            <Contacts></Contacts>
            <Defects></Defects>
            <Uplotnitel></Uplotnitel>
            <feedbackForm></feedbackForm>
            <Footer></Footer>
        </main>
    </div>
</template>

<script>
import { useDarkThemeStore } from "@/assets/js/darkThemStore";
import Contacts from "@/components/contacts/Contacts";
import Defects from "@/components/defects/Defects";
import feedbackForm from "@/components/feedbackform/FeedbackForm";
import Header from "@/components/header/Header";
import MainBlock from "@/components/main_block/MainBlock";
import Uplotnitel from "@/components/uplotnitel/uplotnitel";
import uslugiSlider from "@/components/uslugi_slider/uslugiSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import Actions from "../components/actions/Actions";
import Footer from "../components/footer/Footer";
import Otzivi from "../components/otzivi/Otzivi.vue";
import worksSlider from "../components/works_slider/worksSlider";

export default {
    components: {
        Header,
        MainBlock,
        Defects,
        Uplotnitel,
        uslugiSlider,
        feedbackForm,
        Otzivi,
        worksSlider,
        Footer,
        Actions,
        Contacts,
    },
    data() {
        return {
            dark_theme: useDarkThemeStore(),
            width: window.innerWidth,
        };
    },
    mounted() {
        window.onresize = () => {
            this.width = window.innerWidth;
        };
        AOS.init();
        this.dark_theme.theme == false
            ? document.querySelector("html").classList.add("light")
            : document.querySelector("html").classList.remove("light");
    },
};
</script>

<style></style>
