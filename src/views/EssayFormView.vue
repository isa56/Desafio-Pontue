<script>

import axios from 'axios';
import { server } from '@/common';
import { ref } from 'vue';

import Logo from "../components/Logo.vue";
import Footer from "../components/Footer.vue";
import GoBackIcon from "../components/GoBackIcon.vue";
import { compileStyleAsync } from 'vue/compiler-sfc';

export default {
    name: "EssayForm",
    data() {
        return {
            essayId: '',
            essayUrl: '',
            file: '',
            message: ''
        };
    },
    components: { Logo, Footer, GoBackIcon },
    mounted() {

        this.essayId = this.$route.params.id;

        if (this.essayId) {

            axios.get(`${server}/redacao/${this.essayId}`)
                .then(response => {
                    this.essayUrl = response.data.data.urls[0].url;
                })
                .catch(error => console.log(error))
        }

    },

    methods: {

        postEssay() {

            if (this.essayId) { // atualiza a redação
                this.updateEssay();
            } else { // cria a redação
                this.createEssay();
            }

        },

        async handleFile(event) {
            this.file = event.target.files[0];
            console.log(this.file);

        },

        updateEssay() {

            console.log("Update!")

            let formData = new FormData()
            formData.append('urls[]', this.essayUrl)
            formData.append('file[]', this.file)

            axios.post(`${server}/redacao/${this.essayId}/update`, formData,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response => {

                    console.log(response.data.data);
                    this.essayDate = response.data.data.created_at;
                    this.essayUrl = response.data.data.urls[0].url;
                    this.message = "Sucesso! O arquivo foi enviado!"


                })
                .catch(error => {
                    console.log(error.response.data)
                    this.message = "Ocorreu um erro ao enviar o arquivo."
                }
                )

        },

        createEssay() {

            console.log("Create!")

            let formData = new FormData()

            formData.append('file[]', this.file)


            axios.post(`${server}/alunos/redacao/create/`, formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log("Sucesso!", response)
                    this.message = "Sucesso! O arquivo foi enviado!"
                })
                .catch(error => {
                    console.log("Erro!", error.response.data)
                    this.message = "Ocorreu um erro ao enviar o arquivo."
                })
        }

    }

}
</script>

<template>
    <div class="container">
        <div class="header-container">
            <Logo />

            <GoBackIcon />
        </div>

        <div class="form-container">
            <h2 class="form-title" v-if="essayUrl === ''">Adicione uma nova redação</h2>
            <h2 class="form-title" v-else>Altere a redação</h2>

            <div class="current-essay-container" v-if="essayUrl !== ''">
                <iframe
                    class="current-essay-file"
                    :src="essayUrl"
                    style="width:800px; height:600px;"
                    frameborder="0"
                ></iframe>
            </div>

            <label class="input-label">
                <input
                    class="input-essay"
                    type="file"
                    id="file"
                    accept="image/png, image/jpeg, application/pdf"
                    @change="handleFile($event)"
                    required
                />
                Escolher arquivo
            </label>

            <div class="btn-container">
                <button class="submit-button" type="submit" @click="postEssay">Enviar redação</button>
            </div>

            <h3>{{ message }}</h3>
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

@media (min-width: 800px) {
    .current-essay-file {
        border-radius: 8px;
        width: 100%;
    }
}

@media (max-width: 799px) {
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
    cursor: pointer;
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
    cursor: pointer;
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