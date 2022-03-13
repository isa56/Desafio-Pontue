<script>

import VueFeather from 'vue-feather';


import Footer from "@/components/Footer.vue";
import Logo from "@/components/Logo.vue";

export default {
    name: 'ListTexts',
    data() {
        return {
            userName: "Isadora",
            userType: "admin",

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
        VueFeather,
    }

}
</script>

<template>
    <div class="container">
        <div class="header-container">
            <Logo class="logo-container" />
            <h2>Olá, {{ userName }}!</h2>
        </div>

        <div class="add-btn-container">
            <a style="text-decoration: none;" href="">
                <div class="add-button">
                    <p>Adicionar Redação</p>
                    <vue-feather class="icon" type="plus"></vue-feather>
                </div>
            </a>
        </div>

        <div class="list-container">
            <ul class="list">
                <li class="list-item" v-for="(text, index) in texts" :key="index">
                    <div class="list-item-container">
                        {{ text }}
                        <div class="icons-container">
                            <a href="">
                                <vue-feather v-if="userType === 'admin'" class="icon" type="edit-2"></vue-feather>
                            </a>
                            <a href="">
                                <vue-feather
                                    v-if="userType === 'admin'"
                                    class="icon"
                                    type="trash-2"
                                ></vue-feather>
                            </a>
                            <a href="">
                                <vue-feather class="icon" type="eye"></vue-feather>
                            </a>
                        </div>
                    </div>
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

.add-btn-container {
    display: flex;
    justify-content: end;
    width: auto;
}

.add-button {
    align-items: center;
    background-color: var(--logo-pink);
    border-radius: 6px;
    color: var(--white-background);
    display: flex;
    font-family: "Museo Sans", sans-serif;
    font-size: 0.8em;
    font-weight: bold;
    justify-content: space-between;
    padding: 0.3em;
    margin: 0.4em;
}

.list {
    list-style-type: none;
}

.list-item {
    background-color: var(--primary-color);
    border-radius: 6px;
    color: var(--white-background);
    margin: 0.4em;
    padding: 0.8em;
    text-decoration: none;
}

.list-item-container {
    align-items: center;
    display: flex;
    font-family: "Museo Sans", sans-serif;
    justify-content: space-between;
}

.icons-container {
    display: inline;
    text-align: end;
}

.icon {
    color: var(--white-background);
    margin-right: 0.8em;
}
</style>