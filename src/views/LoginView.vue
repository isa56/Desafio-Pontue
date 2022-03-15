<script setup>
import LoginForm from "@/components/LoginForm.vue";
import Logo from "@/components/Logo.vue";
</script>

<template>
    <div class="container">
        <div class="login-container">
            <Logo class="logo-container" />
            <div class="form-container">
                <h2 class="callToAction">Venha ser Pontue!</h2>

                <LoginForm />
            </div>
        </div>
    </div>
</template>

<style scoped>
.logo-container {
    margin: auto;
    padding: 2em 0;
    text-align: center;
}

.login-container {
    align-items: center;
    justify-content: center;
    margin: auto;
    text-align: center;
}

.form-container {
    background: var(--primary-color);
    border-radius: 8px;
    color: var(--white-background);
    display: block;
    margin: 0 16em;
    padding: 2em 3em;
}

.callToAction {
    font-family: "Museo Sans", sans-serif;
    color: var(--white-background);
    margin-bottom: 1em;
}

@media (max-width: 800px) {
    .logo {
        height: auto;
        width: 60%;
    }

    .form-container {
        background: var(--primary-color);
        border-radius: 8px;
        color: var(--white-background);
        margin: 0 0.4em;
        padding: 0.4em;
        width: auto;
    }

    .callToAction {
        font-size: 1.2em;
        margin: 1em;
    }

}
</style>