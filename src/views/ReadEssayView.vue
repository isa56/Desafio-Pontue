<script>

import VueFeather from 'vue-feather'

import Footer from "@/components/Footer.vue"
import Logo from "../components/Logo.vue"


export default {
    name: "ReadEssayView",
    data() {
        return {
            essayTitle: "Redação #1",
            essayUrl: "https://images7.content-hci.com/commimg/myhotcourses/blog-inline/myhc_57702.jpg"
        };
    },
    components: {
        Logo,
        Footer,
        VueFeather,
    }
}
</script>

<template>
    <div class="container">
        <div class="header-container">
            <div class="logo-container">
                <Logo />
            </div>
            <a href>
                <div class="icon-container">
                    <vue-feather class="icon" type="arrow-left"></vue-feather>
                </div>
            </a>
        </div>

        <div class="essay-container">
            <h2 class="essay-title">Título: {{ essayTitle }}</h2>

            <div class="essay-file-container">
                <img class="essay" v-bind:src="essayUrl" alt="Imagem com a sua redação." />
            </div>
        </div>

        <Footer />
    </div>
</template>

<style scoped>
@import "@/assets/global.css";

.container {
    margin: 0 3em;
}

.logo-container {
    text-align: end;
}

.icon-container {
    align-items: center;
    background-color: var(--logo-pink);
    border-radius: 20px;
    color: var(--white-background);
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
}

.icon-container:hover {
    background-color: var(--logo-purple);
}

.essay-container {
    margin-top: 3em;
}

.essay-title {
    margin-bottom: 2em;
}

.essay-file-container {
    display: flex;
    justify-content: center;
}

@media (min-width: 769px) {
    .essay {
        width: 900px;
    }
}

@media (max-width: 768px) {
    .essay {
        width: 100%;
    }
}

</style>