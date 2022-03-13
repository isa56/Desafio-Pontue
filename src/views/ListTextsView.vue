<script>

import Footer from "@/components/Footer.vue";
import Logo from "@/components/Logo.vue";

export default {
    name: 'ListTexts',
    data() {
        return {
            userName: "Isadora",

            texts: [
                "texto 1",
                "texto 2",
                "texto 3",
                "texto 4",
                "texto 5",
                "texto 6",
                ]
        }
    },
    components: {
        Logo,
        Footer,
    }

}
</script>

<template>
    <div class="container">
        <div class="header-container">
            <Logo class="logo-container" />
            <h2>Olá, {{ userName }}!</h2>
        </div>

        <div class="list-container">
            <ul class="list">
                <li class="list-item" v-for="(text, index) in texts" :key="index">
                    <a class="item-link" href>{{ text }}</a>
                </li>
            </ul>
        </div>

        <Footer />
    </div>
</template>

<style scoped>
@import "@/assets/global.css";

.header-container {
    color: var(--logo-pink);
    font-family: "Museo Sans", sans-serif;
    margin: 1em;
}

.logo-container {
    text-align: end;
}

.list {
    list-style-type: none;
}

.list-item {
    background-color: var(--primary-color);
    border-radius: 6px;
    margin: 0.4em;
    padding: 0.8em;
    text-decoration: none;
}

.item-link {
    color: var(--white-background);
    
}

</style>