<script>
export default {
    name: 'Logo',
    props: {
        imageSize,
    }
}
</script>


<template>
    <div class="logo-container">
        <img class="logo" src="../assets/logo.svg" alt="Logo Pontue" />
    </div>
</template>


<style scoped>
.logo-container {
    display: block;
}
.logo {
    height: auto;
    width: 18%;
}

@media (max-width: 768px) {
    .logo {
        height: auto;
        width: 60%;
    }
}
</style>