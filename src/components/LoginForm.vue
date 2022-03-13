<script setup>
import InputField from "@/components/InputField.vue";
</script>

<template>
    <div class="loginForm">
        <InputField type="email" label="E-Mail" />
        <br />
        <InputField type="password" label="Senha" />
        <br />
        <button class="login-button">Logar</button>
    </div>
</template>

<style scoped>
@import "@/assets/global.css";

.loginForm {
    justify-content: center;
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

.loginButton:hover {
    background: var(--white-background);
    color: var(--logo-pink);
}
</style>