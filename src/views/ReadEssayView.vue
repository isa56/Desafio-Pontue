<script>

import VueFeather from 'vue-feather';
import axios from 'axios';
import { server } from '@/common';

import Footer from "@/components/Footer.vue";
import Logo from "../components/Logo.vue";
import GoBackIcon from '../components/GoBackIcon.vue';


export default {
    name: "ReadEssayView",
    data() {
        return {
            essayTitle: '',
            essayUrl: ''
        };
    },
    components: {
        Logo,
        Footer,
        VueFeather,
        GoBackIcon
    },
    props: {
        essay: Object
    },

    mounted() {

        const essay_id = this.$route.params.id

        axios.get(`${server}/redacao/${essay_id}`)
            .then(response => {

                console.log(response.data.data);
                this.essayTitle = response.data.data.created_at;
                this.essayUrl = response.data.data.urls[0].url;

            })
            .catch(error => console.log(error))


    }
}
</script>

<template>
    <div class="container">
        <div class="header-container">
            <div class="logo-container">
                <Logo />
            </div>
            <GoBackIcon />
        </div>

        <div class="essay-container">
            <h2 class="essay-title">Título: {{ essayTitle }}</h2>

            <div class="essay-file-container">
                <img class="essay" :src="essayUrl" alt="Imagem com a sua redação." />
            </div>
        </div>
    </div>
</template>


<style scoped>
@import "@/assets/global.css";

.container {
    margin: 0 3em;
}

.essay-container {
    margin-top: 3em;
}

.essay-title {
    color: var(--text-color);
    margin-bottom: 1.5em;
}

.essay-file-container {
    display: flex;
    justify-content: center;
}

@media (min-width: 769px) {
    .essay {
        width: 700px;
    }
}

@media (max-width: 768px) {
    .essay {
        width: 100%;
    }
}
</style>