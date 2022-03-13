<script >
export default {
    name: 'InputField',
    props: ['label', 'type'],
}
</script>

<template>
    <label class="input-label">{{ label }}:</label>
    <br />
    <input class="input-field" v-bind:type="type" v-bind:placeholder="label" />
</template>

<style scoped>
@import "@/assets/global.css";

.input-label {
    text-align: left;
    font-family: "Museo Sans", sans-serif;
    font-size: 0.8em;
}

.input-field {
    border: none;
    border-radius: 8px;
    margin: 0.6em;
    padding: 0.8em;
    width: 50%;
}

</style>