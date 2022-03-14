<script setup>
import LoginView from "@/views/LoginView.vue"
import ListEssaysView from "@/views/ListEssaysView.vue"
import ReadEssayView from "@/views/ReadEssayView.vue"
import EssayForm from "./views/EssayFormView.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <router-view />
  <Footer />
  <!-- <LoginView />
  <ListEssaysView />
  <ReadEssayView />
  <EssayForm />-->
</template>

<style>
@import "@/assets/global.css";

#app {
  font-family: "Museo Sans", sans-serif;
  font-weight: normal;
  margin: 0 0;
}

.logo-container {
  text-align: end;
}

@media (max-width: 768px) {
  .logo-container {
    margin: 0;
    padding: 0;
    text-align: center;
  }
}

.icon {
    color: var(--white-background);
    margin-right: 0;
}

</style>
