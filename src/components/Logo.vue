<script>
export default {
    name: 'Logo',
}
</script>


<template>
    <div class="logo-container">
        <router-link to="/">
            <img class="logo" src="../assets/logo.svg" alt="Logo Pontue" />
        </router-link>
    </div>
</template>


<style scoped>
.logo-container {
    display: block;
}
.logo {
    height: auto;
    width: 16%;
    transition: transform 0.3s;
}

.logo:hover {
    transform: scale(1.1);
}

@media (max-width: 768px) {
    .logo {
        height: auto;
        width: 50%;
    }
}
</style>