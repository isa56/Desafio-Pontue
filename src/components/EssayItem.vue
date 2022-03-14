<script>

import VueFeather from 'vue-feather';

export default {
    name: 'EssayItem',
    data() {
        return {

        }
    },

    props: ['essay'],

    components: {
        VueFeather
    }

}
</script>


<template>
    <div class="list-item-container">
        {{ essay.numero }}
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
}

.icon:hover {
    color: var(--logo-pink);
}
</style>
