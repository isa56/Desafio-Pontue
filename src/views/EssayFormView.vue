<script>

import Logo from "../components/Logo.vue"
import Footer from "../components/Footer.vue";
import GoBackIcon from "../components/GoBackIcon.vue";

export default {
    name: "EssayForm",
    data() {
        return {
            essayId: "123",
            essayFile: "https://portalradar.com.br/wp-content/uploads/2019/08/pride.jpg"
        };
    },
    components: { Logo, Footer, GoBackIcon }
}
</script>

<template>
    <div class="container">
        <div class="header-container">
            <Logo />

            <GoBackIcon />
        </div>

        <div class="form-container">
            <h2 class="form-title" v-if="essayFile === ''">Adicione uma nova redação</h2>
            <h2 class="form-title" v-else>Altere a redação</h2>

            <div class="current-essay-container" v-if="essayFile !== ''">
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
    </div>
</template>

<style scoped>
.container {
    margin: 0 3em;
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
    margin: 2em;
    text-align: center;
}

@media (min-width: 769px) {
    .current-essay-file {
        border-radius: 8px;
        width: 100%;
    }
}

@media (max-width: 768px) {
    .container {
        margin: 0;
    }

    .form-container {
        margin: 1em 0;
        width: 90%;
    }
    .current-essay-file {
        border-radius: 8px;
        margin: 1em 0;
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