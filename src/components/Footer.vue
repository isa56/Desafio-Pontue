<template>
    <div class="footer">
        <p>
            Desenvolvido por
            <a
                class="footer-txt"
                href="https://github.com/isa56/"
                target="_blank"
            >Isadora Gonçalves Ferreira</a>.
        </p>
        <p>
            Processo Seletivo de
            <a
                class="footer-txt"
                href="https://pontue.com.br/"
                target="_blank"
            >Pontue</a>.
        </p>
    </div>
</template>

<style scoped>
@import "@/assets/global.css";

.footer {
    border-radius: 8px;
    color: var(--text-color);
    font-family: "Museo Sans", sans-serif;
    font-size: 0.8em;
    margin-top: 0.6em;
    padding: 0.4em;
    text-align: center;
}

.footer-txt {
    transition: transform 0.3s;
}

.footer-txt:hover {
    transform: scale(1.1);
}

</style>