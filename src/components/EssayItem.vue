<script>

import VueFeather from 'vue-feather';
import axios from 'axios';
import { server } from '@/common';

export default {
    name: 'EssayItem',
    data() {
        return {
            date: ''
        }
    },

    props: ['essay'],

    components: {
        VueFeather
    },

    emits: ['getItems'],

    mounted() {

        this.date = this.essay.created_at.split(' ')[0];

        this.date = this.date.split('-')[2] + '/' + this.date.split('-')[1] + '/' + this.date.split('-')[0];

    },

    methods: {

        editEssay(essay) {

            const id = essay.id;
            axios.get(`${server}/redacao/${id}`)
                .then(() => {
                    this.$router.push({ name: 'formulario-redacao', params: { id } });
                })
                .catch(error => console.log(error));


        },

        deleteEssay(essay) {

            const id = essay.id;

            axios.delete(`${server}/redacao/${id}/delete`)
                .then((response) => {
                    console.log("Deleção feita com sucesso!\n", response)
                    alert("Deleção feita com sucesso!")
                    this.$emit('getItems')
                })
                .catch(error => console.log(error));

        },

        viewEssay(essay) {

            const id = essay.id;
            axios.get(`${server}/redacao/${id}`)
                .then(() => {
                    this.$router.push({ name: 'redacao', params: { id } });
                })
                .catch(error => console.log(error));
        }

    }

}
</script>


<template>
    <div class="list-item-container" :key="essay.id">
        {{ date }}
        <div class="icons-container">
            <div class="icon-container" @click="editEssay(essay)">
                <vue-feather class="icon" type="edit-2"></vue-feather>
            </div>
            <div class="icon-container" @click="deleteEssay(essay)">
                <vue-feather class="icon" type="trash-2"></vue-feather>
            </div>
            <div class="icon-container" @click="viewEssay(essay)">
                <vue-feather class="icon" type="eye"></vue-feather>
            </div>
        </div>
    </div>
</template>


<style scoped>
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

.icon-container {
    cursor: pointer;
    display: inline;
}

.icon {
    margin-right: 0.8em;
    transition: transform 0.3s, color .3s;
}

.icon:hover {
    color: var(--logo-pink);
    transform: scale(1.2);
}
</style>
