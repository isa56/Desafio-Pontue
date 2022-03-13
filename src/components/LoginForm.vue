<script setup>
import LoginField from "@/components/LoginField.vue";
</script>

<template>
    <div class="loginForm">
        <LoginField type="email" label="E-Mail" />
        <br />
        <LoginField type="password" label="Senha" />
        <br />
        <button class="loginButton">Logar</button>
    </div>
</template>

<style scoped>
@import "@/assets/global.css";

.loginForm {
    justify-content: center;
}
.loginButton {
    background: var(--logo-pink);
    border: none;
    border-radius: 6px;
    color: var(--white-background);
    font-family: "Museo Sans", sans-serif;
    font-size: 1em;;
    margin: 0.6em;
    padding: 0.6em;
    width: 50%;
}

.loginButton:hover {
    background: var(--white-background);
    color: var(--logo-pink);
}

</style>