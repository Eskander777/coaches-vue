<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: { TheHeader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
}
</style>
