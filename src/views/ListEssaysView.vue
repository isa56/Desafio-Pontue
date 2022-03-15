<script>

import VueFeather from 'vue-feather';
import axios from 'axios';

import Logo from "@/components/Logo.vue";
import EssayItem from "@/components/EssayItem.vue";
import { server } from '@/common';

export default {
    name: 'ListEssays',
    data() {
        return {
            essays: [],
            alunoId: false,
        }
    },
    components: {
        Logo,
        VueFeather,
        EssayItem
    },
    methods: {
        logout() {
            localStorage.removeItem('token')
            this.$router.push('/')
        },

        getItems() {

            if (this.alunoId === null) {
                this.getItemsAdmin();
            } else {
                this.getItemsStudent();
            }

        },

        getItemsStudent() {

            axios.get(`${server}/index/aluno/${this.alunoId}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            })
                .then((response) => {
                    this.essays = response.data.data
                })
                .catch((error) => {
                    console.log("Erro no aluno")
                    console.log(error)
                }
                )

        },

        getItemsAdmin() {

            let formData = new FormData()

            formData.append('year', 2021)
            formData.append('month', 4)

            axios.get(`${server}/index/admin`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then((response) => {
                    this.essays = response.data.data
                })
                .catch((error) => console.log(error))
        }

    },

    mounted() {

        this.alunoId = localStorage.getItem('aluno_id');

        if (this.alunoId === 'null') {
            this.alunoId = null
        }

        this.getItems();


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

            <h2 style="margin-left: 2em;">Olá, {{ this.alunoId ? "aluno" : "administrador" }}!</h2>
        </div>

        <div class="list-container">
            <div v-if="this.alunoId" class="btn-container">
                <router-link style="text-decoration: none;" to="/formulario-redacao">
                    <div class="add-button">
                        <p>Adicionar Redação</p>
                        <vue-feather class="icon" type="plus"></vue-feather>
                    </div>
                </router-link>
            </div>

            <div v-if="this.essays.length > 0">
                <ul style="list-style-type: none;">
                    <li class="list-item" v-for="(essay, index) in essays" :key="index">
                        <EssayItem @get-items="getItems" :essay="essay" />
                    </li>
                </ul>
            </div>

            <div class="message-container" v-else >

                <h3>Não há redações para exibir</h3>

            </div>
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

.message-container {
    margin: 4em;
    text-align: center;
}

</style>