<script>

import VueFeather from 'vue-feather';
import axios from 'axios';
import { server } from '@/common';

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
                <iframe
                    class="essay"
                    :src="essayUrl"
                    style="border-radius: 8px; height:600px; width:800px;"
                    frameborder="0"
                ></iframe>
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
    background: var(--primary-color);
    border-radius: 8px;
    color: var(--white-background);
    display: block;
    margin: 5em;
    padding: 3em;
}

.essay-title {
    margin-bottom: 1.5em;
}

.essay-file-container {
    display: flex;
    justify-content: center;
}

@media (max-width: 799px) {

    .container {
        margin: 0;
    }
    .essay {
        width: 100%;
    }

    .essay-container {
        margin: 1em 0;
        width: 90%;
    }

}

</style>