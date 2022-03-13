<script>

import VueFeather from 'vue-feather'

export default {
    name: 'GoBackIcon',
    data() {
        return {
            goBackTo: "redacoes"
        }
    },
    components: {
        VueFeather
    }
}
</script>


<template>
    <router-link to="/redacoes">
        <div class="icon-container">
            <vue-feather class="icon" type="arrow-left"></vue-feather>
        </div>
    </router-link>
</template>

<style scoped>
.icon-container {
    align-items: center;
    background-color: var(--logo-pink);
    border-radius: 20px;
    color: var(--white-background);
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
}

.icon-container:hover {
    background-color: var(--logo-purple);
}

</style>