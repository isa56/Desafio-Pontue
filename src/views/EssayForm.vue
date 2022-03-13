<script>

import Logo from "../components/Logo.vue"
import Footer from "../components/Footer.vue";
import GoBackIcon from "../components/GoBackIcon.vue";
import InputField from "../components/InputField.vue";

export default {
    name: "EssayForm",
    data() {
        return {
            essayId: "123",
            essayFile: "https://images5.content-hci.com/commimg/myhotcourses/blog-inline/myhc_60529.jpg"
        };
    },
    components: { Logo, Footer, GoBackIcon, InputField }
}
</script>

<template>
    <div class="container">
        <div class="header-container">
            <Logo />

            <GoBackIcon />
        </div>

        <div class="form-container">
            <h2 class="form-title" v-if="essayId === ''">Adicione uma nova redação</h2>
            <h2 class="form-title" v-else>Altere a redação</h2>

            <div class="current-essay-container"  v-if="essayFile !== ''">
                <img class="current-essay-file" :src="essayFile" alt="Sua redação atual." />
            </div>

            <label class="input-label">
                <input class="input-essay" type="file" />
                Escolher arquivo
            </label>

            <div class="btn-container">
                <button class="submit-button" type="submit">Enviar redação</button>
            </div>
        </div>

        <Footer />
    </div>
</template>

<style scoped>
.container {
    margin: 0 3em;
}

.logo-container {
    text-align: end;
}

.form-container {
    align-items: center;
    background: var(--primary-color);
    border-radius: 8px;
    color: var(--white-background);
    display: block;
    margin: 1em 5em;
    padding: 3em;
}

.form-title {
    margin-bottom: 1.5em;
}

.current-essay-container {
    text-align: center;
    margin: 2em;
}

@media (min-width: 769px) {
    .current-essay-file {
        width: 800px;
    }
}

@media (max-width: 768px) {
    .essay {
        width: 100%;
    }
}

.input-label {
    background: var(--logo-pink);
    border: none;
    border-radius: 8px;
    color: var(--white-background);
    font-family: "Museo Sans", sans-serif;
    font-size: 1em;
    margin: 1.5em 0.6em;
    padding: 0.6em;
    width: 50%;
}

.input-label:hover {
    background: var(--white-background);
    color: var(--logo-purple);
}

.input-essay {
    display: none;
}

.btn-container {
    display: flex;
    justify-content: center;
}

.submit-button {
    background: var(--logo-pink);
    border: none;
    border-radius: 8px;
    color: var(--white-background);
    font-family: "Museo Sans", sans-serif;
    font-size: 1em;
    margin: 2em 0 1em;
    padding: 0.6em;
    width: 50%;
}

.submit-button:hover {
    background: var(--white-background);
    color: var(--logo-purple);
}
</style>