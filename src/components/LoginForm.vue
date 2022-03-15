<script>
import axios from 'axios'

import { server } from "@/common"


export default {
    name: 'LoginForm',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {

        async login() {

            axios.post(`${server}/auth/login`, {
                email: this.email,
                password: this.password
            })
                .then(response => {
                    localStorage.setItem('token', response.data.access_token)
                    localStorage.setItem('aluno_id', response.data.aluno_id)

                    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`

                    this.$router.push({ name: 'redacoes' })

                })
                .catch(erro => console.log(erro))
        }

    }
}

</script>

<template>
    <div class="login-form">
        <form @submit.prevent="login">
            <label class="input-label" for="email">E-Mail:</label>
            <br />
            <input class="input-field" id="email" type="email" placeholder="E-Mail" v-model="email" />
            <br />

            <label class="input-label" for="password">Senha:</label>
            <br />
            <input
                class="input-field"
                id="password"
                type="password"
                placeholder="Senha"
                v-model="password"
            />

            <button class="login-button" type="submit">Logar</button>
        </form>
    </div>
</template>

<style scoped>
@import "@/assets/global.css";

.login-form {
    justify-content: center;
}

.input-label {
    text-align: left;
    font-family: "Museo Sans", sans-serif;
    font-size: 0.8em;
}

.input-field {
    border: none;
    border-radius: 8px;
    margin: 0.6em;
    padding: 0.8em;
    width: 50%;
}

.login-button {
    background: var(--logo-pink);
    border: none;
    border-radius: 8px;
    color: var(--white-background);
    font-family: "Museo Sans", sans-serif;
    font-size: 1em;
    margin: 0.6em;
    padding: 0.6em;
    width: 50%;
}

.login-button:hover {
    background: var(--white-background);
    color: var(--logo-pink);
    cursor: pointer;
}

@media (max-width: 767px) {
    .login-button {
        font-size: 0.8em;
        margin: 1.6em;
    }
}

</style>