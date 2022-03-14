<script>

import VueFeather from 'vue-feather';


import Footer from "@/components/Footer.vue";
import Logo from "@/components/Logo.vue";

export default {
    name: 'ListEssays',
    data() {
        return {
            userName: "Isadora",
            essays: [
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
    },
    methods: {
        logout() {
            localStorage.removeItem('token')
            this.$router.push('/')
        }
    }

}
</script>

<template>
    <div class="container">
        <div class="header-container">
            <Logo />

            <div class="btn-container" style="justify-content: start; margin-left: 2em;">
                <div class="add-button" @click="logout">
                    <p>Sair da conta</p>
                    <vue-feather style="margin-left: 5px;" class="icon" type="log-out"></vue-feather>
                </div>
            </div>

            <h2 style="margin-left: 2em;">Olá, {{ userName }}!</h2>
        </div>

        <div class="list-container">
            <div class="btn-container">
                <router-link style="text-decoration: none;" to="/formulario-redacao">
                    <div class="add-button">
                        <p>Adicionar Redação</p>
                        <vue-feather class="icon" type="plus"></vue-feather>
                    </div>
                </router-link>
            </div>

            <ul style="list-style-type: none;">
                <li class="list-item" v-for="(text, index) in essays" :key="index">
                    <div class="list-item-container">
                        {{ text }}
                        <div class="icons-container">
                            <router-link to="/formulario-redacao?">
                                <vue-feather class="icon" type="edit-2"></vue-feather>
                            </router-link>
                            <router-link to="/excluir-redacao?">
                                <vue-feather class="icon" type="trash-2"></vue-feather>
                            </router-link>
                            <router-link to="/redacao">
                                <vue-feather class="icon" type="eye"></vue-feather>
                            </router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/global.css";

.container {
    margin: 1em;
}

.header-container {
    color: var(--logo-pink);
    font-family: "Museo Sans", sans-serif;
    margin: 0em;
}

.btn-container {
    display: flex;
    justify-content: end;
    width: auto;
}

.add-button {
    align-items: center;
    background-color: var(--logo-pink);
    border-radius: 8px;
    color: var(--white-background);
    display: flex;
    font-family: "Museo Sans", sans-serif;
    font-size: 0.8em;
    font-weight: bold;
    justify-content: space-between;
    padding: 0.5em;
    margin: 0.4em 1em;
}

.add-button:hover {
    background-color: var(--logo-purple);
    cursor: pointer;
}

.icon {
    margin-right: 0.8em;
}

.icon:hover {
    color: var(--logo-pink);
}

.list-item {
    background-color: var(--primary-color);
    border-radius: 8px;
    color: var(--white-background);
    margin: 0.8em;
    padding: 1em;
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
</style>