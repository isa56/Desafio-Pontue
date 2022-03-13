<script setup>
</script>

<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            emailTxt: '',
            passwordTxt: '',
        }
    },
    methods: {
        login(event) {
            event.preventDefault()
            console.log(emailTxt)
            console.log(passwordTxt)
        }
    }
}

</script>

<template>
    <div class="login-form">
        <label class="input-label" for="email">E-Mail:</label>
        <br />
        <input class="input-field" id="email" type="email" placeholder="E-Mail" v-model="emailTxt" />
        <br />
        <label class="input-label" for="password">Senha:</label>
        <br />
        <input class="input-field" id="password" type="password" placeholder="Senha" v-model="passwordTxt" />

        <button class="login-button" @click="login($event)">Logar</button>
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
}

</style>